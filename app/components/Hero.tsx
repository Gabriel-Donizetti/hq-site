"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const TITLE = "A MARMOTA";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Estado inicial
      gsap.set(lettersRef.current, { className: "neon" });
      gsap.set(imageRef.current, { opacity: 0, scale: 0.92 });

      // Entrada da marmota (mais sutil)
      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      });

      // Função de flicker por letra
      const flicker = (index: number, delay = 0) => {
        gsap
          .timeline({ delay })
          .to(lettersRef.current[index], {
            className: "neon-off",
            duration: 0.05,
          })
          .to(lettersRef.current[index], {
            className: "neon",
            duration: 0.08,
          })
          .to(lettersRef.current[index], {
            className: "neon-off",
            duration: 0.04,
          })
          .to(lettersRef.current[index], {
            className: "neon",
            duration: 0.12,
          });
      };

      // Índices do A e do M
      const flickerIndexes = [0, 5];

      // Flicker inicial
      flickerIndexes.forEach((i, idx) => {
        flicker(i, 0.6 + idx * 0.4);
      });

      // Flicker aleatório sutil
      gsap.timeline({ repeat: -1, repeatDelay: 4 }).call(() => {
        const randomIndex =
          flickerIndexes[Math.floor(Math.random() * flickerIndexes.length)];
        flicker(randomIndex);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center bg-black px-6 overflow-hidden"
    >
      {/* Marmota (camada de trás) */}
      <div
        ref={imageRef}
        className="relative z-10 mb-[-40px]"
      >
        <Image
          src="/marmota.png"
          alt="Mascote A Marmota"
          width={200}
          height={200}
          priority
          className="drop-shadow-[0_0_28px_rgba(244,114,182,0.35)]"
        />
      </div>

      {/* Letreiro Neon (camada da frente) */}
      <h1 className="relative z-20 text-center text-6xl font-bold tracking-widest md:text-8xl">
        {TITLE.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) lettersRef.current[i] = el;
            }}
            className="neon"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <p className="relative z-20 mt-8 text-center text-gray-400">
        Histórias em quadrinhos independentes
      </p>
    </section>
  );
}
