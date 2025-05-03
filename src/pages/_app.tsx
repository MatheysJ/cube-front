import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { algoliasearch } from "algoliasearch";
import { ChakraProvider } from "@chakra-ui/react";
import { InstantSearch } from "react-instantsearch";
import system from "../config/theme";

export default function App({ Component, pageProps }: AppProps) {
  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;
  const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;
  const index = process.env.NEXT_PUBLIC_ALGOLIA_CATALOG_INDEX as string;

  const algoliaClient = algoliasearch(appId, apiKey);

  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <InstantSearch searchClient={algoliaClient} indexName={index} insights>
          <Component {...pageProps} />
        </InstantSearch>
      </ThemeProvider>
    </ChakraProvider>
  );
}
