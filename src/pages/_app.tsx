import {
  QueryClient,
  HydrationBoundary,
  QueryClientProvider,
} from "@tanstack/react-query";
import "@/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { UserProvider } from "@/providers";
import { ThemeProvider } from "next-themes";
import { algoliasearch } from "algoliasearch";
import { Toaster } from "@/components/ui/toaster";
import { ChakraProvider } from "@chakra-ui/react";
import { InstantSearch } from "react-instantsearch";
import { QUERY_CLIENT_PROPS } from "@/utils/tanstack";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import system from "../config/theme";

export default function App({ Component, pageProps }: AppProps) {
  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;
  const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;
  const index = process.env.NEXT_PUBLIC_ALGOLIA_CATALOG_INDEX as string;

  const algoliaClient = algoliasearch(appId, apiKey);
  const [queryClient] = useState(() => new QueryClient(QUERY_CLIENT_PROPS));

  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <QueryClientProvider client={queryClient}>
          <InstantSearch
            searchClient={algoliaClient}
            indexName={index}
            insights
          >
            <UserProvider>
              <HydrationBoundary state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </HydrationBoundary>
              <Toaster />
            </UserProvider>
          </InstantSearch>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}
