import { useTranslations } from "next-intl";

export default function TestPage() {
  const t = useTranslations("TestPage");
  return <h1>{t("title")}</h1>;
}