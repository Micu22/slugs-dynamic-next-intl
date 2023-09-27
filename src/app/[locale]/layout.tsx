import { locales } from '../../navigation';
import { notFound } from 'next/navigation';

export default function LocaleLayout({ children, params: { locale }}) {
   // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}