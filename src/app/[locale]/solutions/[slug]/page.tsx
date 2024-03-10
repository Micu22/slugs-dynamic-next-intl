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
    { slug: "/pl/rozwiazania/ulotka/" },
    { slug: "/en/solutions/flyer/" },
    { slug: "/pl/rozwiazania/ulotka/" },
    { slug: "/en/solutions/flyer/" },
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
          <LanguageSwitcher /><br /><br /><br /><br />
          <Link href="/rozwiazania/ulotka">Switch to Ulotka (Polish for Flyer)</Link><br />
          <Link href="/solutions/flyer">Switch to Flyer (English for Ulotka)</Link>
          </>
  );
}
