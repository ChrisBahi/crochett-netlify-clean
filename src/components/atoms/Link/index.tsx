import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const SUPPORTED_LOCALES = ['fr', 'en', 'es', 'it', 'de', 'nl'];

function withLocalePrefix(href: string, localePrefix: string) {
    if (!href || !localePrefix) return href;
    if (!href.startsWith('/')) return href;
    if (href.startsWith('//')) return href;
    if (href.startsWith('/api')) return href;
    if (SUPPORTED_LOCALES.some((locale) => href === `/${locale}` || href.startsWith(`/${locale}/`))) return href;
    if (href === localePrefix || href.startsWith(`${localePrefix}/`)) return href;
    if (href === '/') return localePrefix;
    return `${localePrefix}${href}`;
}

export default function Link({ children, href, ...other }) {
    const router = useRouter();
    const firstSegment = router.asPath.split('?')[0].split('#')[0].split('/').filter(Boolean)[0] || '';
    const localePrefix = SUPPORTED_LOCALES.includes(firstSegment) ? `/${firstSegment}` : '';
    const localizedHref = typeof href === 'string' ? withLocalePrefix(href, localePrefix) : href;

    // Pass Any internal link to Next.js Link, for anything else, use <a> tag
    const internal = typeof localizedHref === 'string' && /^\/(?!\/)/.test(localizedHref);
    if (internal) {
        return (
            <NextLink href={localizedHref} {...other}>
                {children}
            </NextLink>
        );
    }

    return (
        <a href={localizedHref} {...other}>
            {children}
        </a>
    );
}
