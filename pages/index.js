import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data: pieces } = useSWR(URL, fetcher);

  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
