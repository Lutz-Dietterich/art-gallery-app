import ArtPieces from "../../components/ArtPieces";
import useSWR from "swr";

export default function ArtPiecesPage() {
  const { data: pieces } = useSWR("https://example-apis.vercel.app/api/art");
  return <ArtPieces pieces={pieces} />;
}
