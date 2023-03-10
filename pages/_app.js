import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Navigation from "../components/Navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
        <Navigation />
      </SWRConfig>
    </>
  );
}
