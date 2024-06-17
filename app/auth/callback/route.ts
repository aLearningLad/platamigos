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
      try {
        const { data: userData, error: userDataError } =
          await supabase.auth.getUser();

        const googleId = userData.user?.id;

        const { data: thisUser, error: thisUserError } = await supabase
          .from("allusers")
          .select("*")
          .eq("googleid", googleId);

        if (thisUserError) {
          console.log("trouble finding this user: ", thisUserError);
          return null;
        } else if (thisUser && thisUser.length > 1) {
          console.log("this is the user: ", thisUser);
        } else if (thisUser.length < 1) {
          const { error: addUserToDbError } = await supabase
            .from("allusers")
            .insert({});
        }

        if (userDataError) {
          throw new Error(
            "This error occured while fetching using during sign in: ",
            userDataError
          );
        }
      } catch (error) {
        console.log(error);
      }

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
