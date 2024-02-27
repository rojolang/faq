import Head from 'next/head';
import { FAQ } from "../components/FAQ";
import { faqData } from "../components/faqData"; // Adjust the path as necessary to your faqData file

export default function Home() {
    // Generate the structured data script content
    const faqSchema = {
        "@context": "http://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <Head>
                <title>Whats The Wordle? - FAQ</title>
                <meta name="description" content="Discover answers to frequently asked questions about Wordle gameplay, strategies, and how Whats The Wordle? enhances your puzzle solving experience." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Head>
            <div className="min-h-screen flex flex-col items-center justify-center py-2">
                <FAQ
                    title="Whats The Wordle? - FAQ"
                    subtitle="Frequently Asked Questions"
                />
            </div>
        </>
    );
}
