import createMiddleware from "next-intl/middleware";
import { locales, pathnames } from "./navigation";

export default createMiddleware({
  locales,
  pathnames,
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ja|en)/:path*"],
};
