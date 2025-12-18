"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const comics = [
  {
    title: "Balinha & Balão — Capítulo 1",
    description: "O começo de algo estranho",
    slug: "balinha-balao",
    cover: "/comics/balinha-balao/cover.jpeg",
  },
];

export default function ComicGrid() {
  return (
    <section
      id="comics"
      className="bg-black px-6 py-32"
    >
      <h2 className="mb-16 text-center text-3xl font-semibold text-white">
        Escolha o que ler
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        {comics.map((comic, index) => (
          <motion.div
            key={comic.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <Link href={`/hq/${comic.slug}`} className="group block">
              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:border-pink-500">
                
                {/* Capa */}
                <div className="relative aspect-[1/1] w-full overflow-hidden">
                  <Image
                    src={comic.cover}
                    alt={`Capa ${comic.title}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    priority
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-pink-400">
                    {comic.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400">
                    {comic.description}
                  </p>

                  <span className="mt-6 inline-block text-sm text-pink-500">
                    Ler →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
