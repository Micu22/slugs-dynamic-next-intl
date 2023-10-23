import { Link, locales } from "../../navigation";
import { notFound } from "next/navigation";

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>
        <main>
          <div>
            {locale === "en" ? (
              <Link locale="ja" href="/test">
                Go to Japanese Test Page
              </Link>
            ) : (
              <Link locale="en" href="/test">
                Go to English Test Page
              </Link>
            )}
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
