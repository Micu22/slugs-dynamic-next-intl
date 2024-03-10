import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import type { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'pl'];

export const pathnames = {
    '/': '/',
    "/solutions/[slug]": {
        en: "/solutions/[slug]",
        pl: "/rozwiazania/[slug]",
      },
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames })