import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "../styles/main.css";

const Header = dynamic<unknown>(
  () => import("../components/Header").then(mod => mod.Header),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
