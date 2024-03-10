"use client";
import { useLocale, useTranslations } from "next-intl";

import { useParams } from "next/navigation";
import { usePathname, useRouter } from "../navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  // const locale = useLocale()
  const params = useParams();

  const changeLanguage = (lang: string) => {
    // @ts-expect-error -- TypeScript will validate that only known `params`
    // are used in combination with a given `pathname`. Since the two will
    // always match for the current route, we can skip runtime checks.
    router.replace({ pathname, params }, { locale: lang });
  };

  return (
    <div>
      {["pl", "en"].map((lang) => (
        <button key={lang} onClick={() => changeLanguage(lang)}>
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
