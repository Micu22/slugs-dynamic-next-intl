import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import type { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'ja'];

export const pathnames = {
    '/': '/',
    '/test': {
        en: '/test',
        ja: '/テスト'
    }
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames })