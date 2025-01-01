import { clerkMiddleware } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher(["/settings(.*)", "/"]);

// export default clerkMiddleware(async (auth, req) => {
//   if (isProtectedRoute(req)) (await auth()).redirectToSignIn();
// });
export default clerkMiddleware();
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
