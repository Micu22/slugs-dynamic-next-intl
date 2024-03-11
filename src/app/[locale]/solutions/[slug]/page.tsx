import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "../../../../navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../../navigation";
import LanguageSwitcher from "../../../../components/localeSwitcher";

// pages/[[..slug]].js

export async function generateStaticParams() {
  // console.log(printing_assets)

  return [
    { slug: "/pl/rozwiazania/ulotka-2/" },
    { slug: "/en/solutions/flyer-2/" },
  ];
}

export default async function Page({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);

  if (!isValidLocale) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <>
      <p>
        {locale}
        {slug}
      </p>
      <LanguageSwitcher />
      <br />
      <br />
      <br />
      <br />
      <Link href="/rozwiazania/ulotka-2">
        Switch to Ulotka (Polish for Flyer)
      </Link>
      <br />
      <Link href="/solutions/flyer-2">
        Switch to Flyer (English for Ulotka)
      </Link>
    </>
  );
}
