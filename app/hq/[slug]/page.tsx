import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// 📚 Metadados das HQs
const COMICS = {
  "balinha-balao": {
    title: "Balinha & Balão — Capítulo 1",
    totalPages: 5,
  },
};

// Slugs conhecidos (obrigatório para export estático)
export async function generateStaticParams() {
  return Object.keys(COMICS).map((slug) => ({ slug }));
}

export default async function ComicPage({ params }: Props) {
  const { slug } = await params;

  const comic = COMICS[slug as keyof typeof COMICS];

  if (!comic) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        {/* Título bonito */}
        <h1 className="mb-10 text-center text-3xl font-bold">
          {comic.title}
        </h1>

        {/* Leitor */}
        <div className="flex flex-col gap-10">
          {Array.from({ length: comic.totalPages }).map((_, index) => {
            const pageNumber = index + 1;

            return (
              <div
                key={pageNumber}
                className="overflow-hidden rounded-xl"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/comics/${slug}/page-${pageNumber}.jpeg`}
                  alt={`Página ${pageNumber}`}
                  width={1200}
                  height={1800}
                  priority={pageNumber === 1}
                  className="h-auto w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
