import createMiddleware from "next-intl/middleware";
import { locales } from './navigation'

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix:'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*']
};
