import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data } = useSWR(URL, fetcher);

  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
