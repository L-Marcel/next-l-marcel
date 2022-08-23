import type { AppProps } from "next/app";
import "react-vertical-timeline-component/style.min.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Layout } from "../styles/document/styles";
import "../styles/main.css";
import "../styles/timeline.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </Layout>
  );
}

export default MyApp;
