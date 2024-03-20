import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="text-[10px] lg:text-[11px]">
      <Head>
        <link href="https://fonts.googleapis.com"
          rel="preconnect" />
        <link href="https://fonts.gstatic.com"
          rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/assets/logo.svg" />
        <title>
          TEC-The Equipping Church Global
        </title>
      </Head>
      <body className="border-2 border-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
