import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/auth", "/", "/shop", "/product/(.*)", "/cart", "/checkout", "/success"]);

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  const isAuthenticated = await convexAuth.isAuthenticated();

  if (!isPublicPage(request) && !isAuthenticated) {
    const returnTo = `${request.nextUrl.pathname}${request.nextUrl.search}`;
    return nextjsMiddlewareRedirect(
      request,
      `/auth?next=${encodeURIComponent(returnTo)}`,
    );
  }

  if (isPublicPage(request) && isAuthenticated && request.nextUrl.pathname === "/auth") {
    return nextjsMiddlewareRedirect(request, "/orders");
  }
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
