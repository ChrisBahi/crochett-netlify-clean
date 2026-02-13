import Head from 'next/head';
import { getCopy } from './i18n';

export default function FormPage({ lang = 'fr' }) {
    const t = getCopy(lang);
    const nextUrl = `https://crochett.ai${t.thankYouPath}`;

    return (
        <>
            <Head>
                <title>{t.formTitle}</title>
                <meta name="description" content={t.formDescription} />
            </Head>
            <main className="page">
                <section className="card">
                    <h1>{t.formHeading}</h1>
                    <p className="subtitle">{t.formSubtitle}</p>

                    <form action={t.formAction} method="POST">
                        <div className="grid">
                            <div>
                                <label htmlFor="nom">
                                    {t.fullName} <span className="required">*</span>
                                </label>
                                <input id="nom" name="nom" type="text" required />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    Email <span className="required">*</span>
                                </label>
                                <input id="email" name="email" type="email" required />
                            </div>
                        </div>

                        <div className="grid">
                            <div>
                                <label htmlFor="telephone">{t.phone}</label>
                                <input id="telephone" name="telephone" type="tel" />
                            </div>
                            <div>
                                <label htmlFor="type">
                                    {t.requestType} <span className="required">*</span>
                                </label>
                                <select id="type" name="type_demande" required>
                                    <option value="">{t.selectPlaceholder}</option>
                                    {t.requestTypes.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message">
                                {t.requestMessage} <span className="required">*</span>
                            </label>
                            <textarea id="message" name="message" required />
                        </div>

                        <label className="consent" htmlFor="consentement">
                            <input id="consentement" name="consentement" type="checkbox" required />
                            {t.consent}
                        </label>

                        <input type="hidden" name="_subject" value="Nouvelle demande depuis crochett.ai" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_next" value={nextUrl} />

                        <button type="submit">{t.submit}</button>
                        <p className="note">
                            {t.emailNote} <strong>{t.email}</strong>.
                        </p>
                        <p className="note">
                            {t.redirectNote} <code>{nextUrl}</code>
                        </p>
                        <p className="note">
                            <a href={t.legalPath}>{t.legalLink}</a>
                        </p>
                    </form>
                </section>
            </main>
            <style jsx>{`
                .page {
                    min-height: 100vh;
                    padding: 24px;
                    display: grid;
                    place-items: center;
                    background: #c9c9c9;
                }
                .card {
                    width: min(760px, 100%);
                    background: #f5f3ef;
                    border: 1px solid #d3cec7;
                    border-radius: 10px;
                    padding: 28px 30px;
                    box-shadow: 0 8px 24px rgba(27, 27, 27, 0.16);
                }
                h1 {
                    margin: 0 0 8px;
                    font-size: clamp(1.6rem, 4vw, 2.1rem);
                    line-height: 1.15;
                    color: #4b4a48;
                }
                .subtitle {
                    margin: 0 0 24px;
                    color: #656260;
                }
                form {
                    display: grid;
                    gap: 14px;
                }
                .grid {
                    display: grid;
                    gap: 14px;
                    grid-template-columns: 1fr 1fr;
                }
                @media (max-width: 700px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }
                }
                label {
                    display: block;
                    margin-bottom: 6px;
                    font-weight: 600;
                    color: #4b4a48;
                }
                input,
                select,
                textarea,
                button {
                    width: 100%;
                    border-radius: 6px;
                    border: 1px solid #cfcac3;
                    padding: 11px 12px;
                    font: inherit;
                    background: #fbfaf8;
                }
                textarea {
                    min-height: 130px;
                    resize: vertical;
                }
                .required {
                    color: #b91c1c;
                }
                .consent {
                    display: flex;
                    gap: 10px;
                    align-items: flex-start;
                    color: #656260;
                    font-weight: 500;
                }
                .consent input {
                    width: 18px;
                    height: 18px;
                    margin-top: 2px;
                }
                button {
                    border: 0;
                    background: #2f2f31;
                    color: #fff;
                    font-weight: 700;
                    margin-top: 4px;
                    cursor: pointer;
                }
                .note {
                    margin: 4px 0 0;
                    font-size: 0.9rem;
                    color: #656260;
                }
                a {
                    color: #2f2f31;
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
