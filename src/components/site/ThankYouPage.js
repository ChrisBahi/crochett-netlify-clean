import Head from 'next/head';
import { getCopy } from './i18n';

export default function ThankYouPage({ lang = 'fr' }) {
    const t = getCopy(lang);
    return (
        <>
            <Head>
                <title>{t.thankTitle}</title>
                <meta name="description" content={t.thankDescription} />
            </Head>
            <main className="page">
                <section className="card">
                    <h1>{t.thankHeading}</h1>
                    <p>{t.thankText}</p>
                    <a href={t.homePath}>{t.thankBack}</a>
                </section>
            </main>
            <style jsx>{`
                .page {
                    min-height: 100vh;
                    padding: 24px;
                    display: grid;
                    place-items: center;
                    background: radial-gradient(circle at 0% 0%, #d1fae5 0%, transparent 40%),
                        radial-gradient(circle at 100% 100%, #fef3c7 0%, transparent 35%), #f4f1ea;
                }
                .card {
                    width: min(640px, 100%);
                    text-align: center;
                    background: #fffdf8;
                    border: 1px solid #d6d3d1;
                    border-radius: 16px;
                    padding: 28px;
                    box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);
                }
                h1 {
                    margin: 0 0 10px;
                    line-height: 1.15;
                    color: #1f2937;
                }
                p {
                    margin: 0;
                    color: #6b7280;
                    line-height: 1.55;
                }
                a {
                    display: inline-block;
                    margin-top: 20px;
                    background: #0f766e;
                    color: #fff;
                    text-decoration: none;
                    font-weight: 700;
                    padding: 11px 16px;
                    border-radius: 10px;
                }
            `}</style>
        </>
    );
}
