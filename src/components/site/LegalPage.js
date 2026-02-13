import Head from 'next/head';
import { getCopy } from './i18n';

function toParagraphs(text) {
    return text.split('\n').map((line) => line.trim()).filter(Boolean);
}

export default function LegalPage({ lang = 'fr' }) {
    const t = getCopy(lang);
    return (
        <>
            <Head>
                <title>{t.legalTitle}</title>
                <meta name="description" content={t.legalDescription} />
            </Head>
            <main className="page">
                <section className="card">
                    <h1>{t.legalHeading}</h1>
                    <p className="muted">{t.updatedAt}</p>

                    {toParagraphs(t.legalBody).map((line) => (
                        <p key={line}>{line}</p>
                    ))}

                    <p>
                        <a href={t.homePath}>{t.backLabel}</a>
                    </p>
                </section>
            </main>
            <style jsx>{`
                .page {
                    min-height: 100vh;
                    padding: 24px;
                    background: radial-gradient(circle at 0% 0%, #d1fae5 0%, transparent 40%),
                        radial-gradient(circle at 100% 100%, #fef3c7 0%, transparent 35%), #f4f1ea;
                }
                .card {
                    width: min(900px, 100%);
                    margin: 0 auto;
                    background: #fffdf8;
                    border: 1px solid #d6d3d1;
                    border-radius: 16px;
                    padding: 28px;
                    box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);
                }
                h1 {
                    margin: 0 0 16px;
                    font-size: clamp(1.6rem, 4vw, 2rem);
                }
                p {
                    line-height: 1.6;
                    margin: 0 0 10px;
                }
                .muted {
                    color: #6b7280;
                    margin-bottom: 18px;
                }
                a {
                    color: #0f766e;
                    text-decoration: none;
                    font-weight: 600;
                }
                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </>
    );
}
