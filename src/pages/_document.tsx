import { Head, Html, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/> 
      </Head>
      <body className="relative scrollbar-thin scrollbar-track-white-700 scrollbar-thumb-primary-500 dark:scrollbar-track-gray-500">
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
}

export default MyDocument;