import Spotlight from "../components/Spotlight";
import useSWR from "swr";

export default function SpotlightPage() {
  const { data: pieces } = useSWR("https://example-apis.vercel.app/api/art");
  return (
    <div>
      <Spotlight pieces={pieces} />
    </div>
  );
}
