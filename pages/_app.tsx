import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { theme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <meta name="theme-color" content="#2BB0EC" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
