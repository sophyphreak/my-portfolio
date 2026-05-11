import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..800;1,6..72,300..700&family=JetBrains+Mono:wght@400;500;700&display=swap"
        />
        <meta name="theme-color" content="#0E0D0C" />
      </Head>
      <body>
        {/* Hidden form for Netlify detection */}
        <form name="contact" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message" />
        </form>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
