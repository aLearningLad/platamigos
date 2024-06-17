import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "./utils/supabase/middleware";
import { createClient } from "./utils/supabase/server";

export async function middleware(request: NextRequest) {
  await updateSession(request);

  const supabase = createClient();
  const googleId = (await supabase.auth.getUser()).data.user?.id;
  const { data: middlewareAuthData, error: middlewareAuthDataError } =
    await supabase.from("allusers").select("*").eq("googleid", googleId);

  if (!middlewareAuthData || middlewareAuthData?.length < 1) {
    const { pathname } = request.nextUrl;

    if (
      pathname.includes("/home") ||
      pathname.includes("/alert") ||
      pathname.includes("/disbursed") ||
      pathname.includes("/peers") ||
      pathname.includes("/usersettings") ||
      pathname.includes("/create")
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.rewrite(url);
    }
  }

  return;
}

export const config = {
  matcher: [
    "/home",
    "/alerts",
    "/disbursed",
    "/bookmarks",
    "/peers",
    "/usersettings",
    "/create",

    // "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
