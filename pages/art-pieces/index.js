import ArtPieces from "../../components/ArtPieces";
import { DataContext } from "../../pages/_app";
import { useContext } from "react";

export default function ArtPiecesPage() {
  const { pieces } = useContext(DataContext);
  return <ArtPieces pieces={pieces} />;
}
