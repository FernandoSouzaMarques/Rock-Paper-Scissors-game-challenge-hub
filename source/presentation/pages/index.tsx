import { Header } from "@/presentation/components/Header";
import { Footer } from "@/presentation/components/Footer";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-grow"></main>

      <Footer />
    </div>
  );
}
