import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";
import useSWR from "swr";
import { createContext } from "react";

export const DataContext = createContext();

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data: pieces } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  return (
    <>
      <GlobalStyle />
      <DataContext.Provider value={{ pieces }}>
        <Component {...pageProps} />
        <Navigation />
      </DataContext.Provider>
    </>
  );
}
