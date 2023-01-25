import type { AppProps } from "next/app";
import React from "react";
import GlobalStyle from "@/constants/globalStyle";
import { ThemeProvider } from "styled-components";
import darkTheme from "@/constants/theme";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(new QueryClient());
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
