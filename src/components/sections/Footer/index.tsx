import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { Social, Action, Link } from '../../atoms';
import ImageBlock from '../../blocks/ImageBlock';

const SUPPORTED_LOCALES = ['fr', 'en', 'es', 'it', 'de', 'nl'];

export default function Footer(props) {
    const {
        colors = 'bg-light-fg-dark',
        logo,
        title,
        text,
        primaryLinks,
        secondaryLinks,
        socialLinks = [],
        legalLinks = [],
        copyrightText,
        styles = {},
        enableAnnotations
    } = props;
    return (
        <footer
            className={classNames(
                'sb-component',
                'sb-component-footer',
                colors,
                styles?.self?.margin ? mapStyles({ padding: styles?.self?.margin }) : undefined,
                styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : 'px-4 py-28'
            )}
            {...(enableAnnotations && { 'data-sb-object-id': props?.__metadata?.id })}
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {(logo?.url || title || text) && (
                        <div className="pb-8 sm:col-span-3 lg:col-auto">
                            {(logo?.url || title) && (
                                <Link href="/" className="flex flex-col items-start">
                                    {logo && (
                                        <ImageBlock {...logo} className="inline-block w-auto" {...(enableAnnotations && { 'data-sb-field-path': 'logo' })} />
                                    )}
                                    {title && (
                                        <div className="h4" {...(enableAnnotations && { 'data-sb-field-path': 'title' })}>
                                            {title}
                                        </div>
                                    )}
                                </Link>
                            )}
                            {text && (
                                <Markdown
                                    options={{ forceBlock: true, forceWrapper: true }}
                                    className={classNames('sb-markdown', 'text-sm', { 'mt-4': title || logo?.url })}
                                    {...(enableAnnotations && { 'data-sb-field-path': 'text' })}
                                >
                                    {text}
                                </Markdown>
                            )}
                        </div>
                    )}
                    {primaryLinks && <FooterLinksGroup {...primaryLinks} {...(enableAnnotations && { 'data-sb-field-path': 'primaryLinks' })} />}
                    {secondaryLinks && <FooterLinksGroup {...secondaryLinks} {...(enableAnnotations && { 'data-sb-field-path': 'secondaryLinks' })} />}
                    {socialLinks.length > 0 && (
                        <div className="pb-6">
                            <ul className="flex flex-wrap items-center" {...(enableAnnotations && { 'data-sb-field-path': 'socialLinks' })}>
                                {socialLinks.map((link, index) => (
                                    <li key={index} className="text-2xl mb-2 mr-8 lg:mr-12 last:mr-0">
                                        <Social {...link} {...(enableAnnotations && { 'data-sb-field-path': `.${index}` })} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                {(copyrightText || legalLinks.length > 0) && (
                    <div className="sb-footer-bottom border-t pt-8 mt-16 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between">
                        {legalLinks.length > 0 && (
                            <ul className="flex flex-wrap mb-3" {...(enableAnnotations && { 'data-sb-field-path': 'legalLinks' })}>
                                {legalLinks.map((link, index) => (
                                    <li key={index} className="mb-1 mr-6 last:mr-0">
                                        <Action {...link} className="text-sm" {...(enableAnnotations && { 'data-sb-field-path': `.${index}` })} />
                                    </li>
                                ))}
                            </ul>
                        )}
                        {copyrightText && (
                            <div className={classNames('mb-4', { 'sm:order-first sm:mr-12': legalLinks.length > 0 })}>
                                <Markdown
                                    options={{ forceInline: true, forceWrapper: true, wrapper: 'p' }}
                                    className={classNames('sb-markdown', 'text-sm')}
                                    {...(enableAnnotations && { 'data-sb-field-path': 'copyrightText' })}
                                >
                                    {copyrightText}
                                </Markdown>
                                <LanguageSelector />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </footer>
    );
}

function LanguageSelector() {
    const router = useRouter();
    const asPath = router.asPath || '/';
    const firstSegment = asPath.split('?')[0].split('#')[0].split('/').filter(Boolean)[0] || '';
    const currentLocale = SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : 'fr';

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = event.target.value;
        const cleanPath = asPath.split('?')[0].split('#')[0] || '/';
        const parts = cleanPath.split('/').filter(Boolean);
        const restParts = SUPPORTED_LOCALES.includes(parts[0]) ? parts.slice(1) : parts;
        const nextPath = `/${nextLocale}${restParts.length ? `/${restParts.join('/')}` : ''}`;
        router.push(nextPath);
    };

    return (
        <div className="mt-3">
            <label className="text-xs uppercase tracking-wide opacity-80" htmlFor="footer-language">
                Langue
            </label>
            <select
                id="footer-language"
                value={currentLocale}
                onChange={handleChange}
                className="block mt-2 text-sm bg-transparent border border-current/40 rounded px-3 py-2"
            >
                <option value="fr">Francais</option>
                <option value="en">English</option>
                <option value="es">Espanol</option>
                <option value="it">Italiano</option>
                <option value="de">Deutsch</option>
                <option value="nl">Nederlands</option>
            </select>
        </div>
    );
}

function FooterLinksGroup(props) {
    const { title, links = [] } = props;
    const fieldPath = props['data-sb-field-path'];
    if (links.length === 0) {
        return null;
    }
    return (
        <div className="pb-8" data-sb-field-path={fieldPath}>
            {title && (
                <h2 className="uppercase text-base tracking-wide" {...(fieldPath && { 'data-sb-field-path': '.title' })}>
                    {title}
                </h2>
            )}
            {links.length > 0 && (
                <ul className={classNames('space-y-3', { 'mt-7': title })} {...(fieldPath && { 'data-sb-field-path': '.links' })}>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Action {...link} className="text-sm" {...(fieldPath && { 'data-sb-field-path': `.${index}` })} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
