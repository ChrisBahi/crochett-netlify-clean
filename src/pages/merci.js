import Head from 'next/head';

export default function MerciAliasPage() {
    return (
        <>
            <Head>
                <title>Redirection...</title>
                <meta httpEquiv="refresh" content="0; url=/thank-you" />
            </Head>
            <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
                <p>Redirection...</p>
            </main>
        </>
    );
}
