import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { type CookieOptions, createServerClient } from "@supabase/ssr";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const cookieStore = cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options });
          },
        },
      }
    );
    const { error: authCodeError } = await supabase.auth.exchangeCodeForSession(
      code
    );
    if (!authCodeError) {
      const googleId = (await supabase.auth.getUser()).data.user?.id;
      const { data: thisUser, error: fetchThisUserError } = await supabase
        .from("allusers")
        .select("*")
        .eq("googleid", googleId);
      const username = await (
        await supabase.auth.getUser()
      ).data.user?.user_metadata.name;

      if (fetchThisUserError) {
        console.log(
          "This error occured while trying to fetch user: ",
          fetchThisUserError
        );
        return;
      }

      if (thisUser.length < 1) {
        console.log(
          "User doesn't exist in table yet. They are being added now"
        );
        try {
          const { error: addUserToDbError } = await supabase
            .from("allusers")
            .insert({
              googleid: googleId,
              username,
              balance: 0,
              creditors_total: 0,
              debtors_total: 0,
              allofferedbymeid: "",
              allofferedtomeid: "",
              allapplicationsid: "",
              creditscore: 0,
              loan_count: 0,
            });

          if (addUserToDbError) {
            throw new Error(addUserToDbError.message);
          }
        } catch (error) {
          console.log("Error while adding user to table: ", error);
        }
      }
    }
    return NextResponse.redirect(`${origin}${next}`);
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
