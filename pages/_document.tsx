import Document, { Html, Main, NextScript, Head } from 'next/document';

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="referrer" content="strict-origin-when-cross-origin" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
