import ComicGrid from "./components/ComicGrid";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <ComicGrid />
    </main>
  );
}
