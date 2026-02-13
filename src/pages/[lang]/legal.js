import LegalPage from '../../components/site/LegalPage';
import { SUPPORTED_LANGS } from '../../components/site/i18n';

export default function LocalizedLegalPage({ lang }) {
    return <LegalPage lang={lang} />;
}

export function getStaticPaths() {
    return {
        paths: SUPPORTED_LANGS.map((lang) => ({ params: { lang } })),
        fallback: false
    };
}

export function getStaticProps({ params }) {
    return {
        props: {
            lang: params.lang
        }
    };
}
