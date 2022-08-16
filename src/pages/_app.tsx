import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
