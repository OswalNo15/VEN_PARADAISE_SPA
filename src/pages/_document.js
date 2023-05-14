import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="es-CO" data-theme="theme-default">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="application-name" content="VENParadaise-SPA" />
          <link
            rel="apple-touch-icon"
            sizes="64x64"
            href="/img/Logo_VenParadaiseSpa64x64.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="128x128"
            href="/img/Logo_VenParadaiseSpa128x128.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/img/Logo_VenParadaiseSpa192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="256x256"
            href="/img/Logo_VenParadaiseSpa256x256.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/img/Logo_VenParadaiseSpa512x512.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="1024x1024"
            href="/img/Logo_VenParadaiseSpa1024x1024.png"
          />
          <meta name="theme-color" content="#EBCBC0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
