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

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) =>  {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      if (info) {
        return artPiecesInfo.map((info) => 
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      } 
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }


  return (
    <>
      <GlobalStyle />
      <DataContext.Provider value={{ pieces, artPiecesInfo, setArtPiecesInfo, handleToggleFavorite(slug)}}>
        <Component {...pageProps} />
        <Navigation />
      </DataContext.Provider>
    </>
  );
}
