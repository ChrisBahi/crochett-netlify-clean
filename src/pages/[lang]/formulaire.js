import FormPage from '../../components/site/FormPage';
import { SUPPORTED_LANGS } from '../../components/site/i18n';

export default function LocalizedFormPage({ lang }) {
    return <FormPage lang={lang} />;
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
