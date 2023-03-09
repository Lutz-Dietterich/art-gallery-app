import Spotlight from "../components/Spotlight";
import { DataContext } from "../pages/_app";
import { useContext } from "react";

export default function SpotlightPage() {
  const { pieces } = useContext(DataContext);
  return (
    <div>
      <Spotlight pieces={pieces} />
    </div>
  );
}
