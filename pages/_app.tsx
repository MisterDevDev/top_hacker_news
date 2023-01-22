import type { AppProps } from "next/app";
import GlobalStyle from "@/constants/globalStyle";
import { ThemeProvider } from "styled-components";
import darkTheme from "@/constants/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
