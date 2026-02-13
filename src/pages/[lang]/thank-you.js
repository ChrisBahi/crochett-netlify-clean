import ThankYouPage from '../../components/site/ThankYouPage';
import { SUPPORTED_LANGS } from '../../components/site/i18n';

export default function LocalizedThankYouPage({ lang }) {
    return <ThankYouPage lang={lang} />;
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
