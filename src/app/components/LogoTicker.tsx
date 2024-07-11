"use client";

import Image from "next/image";
import acme from "../assets/acme.png";
import quantum from "../assets/quantum.png";
import echo from "../assets/echo.png";
import celestia from "../assets/celestia.png";
import pulse from "../assets/pulse.png";
import apex from "../assets/apex.png";

const images = [
  { src: acme, alt: "acme logo" },
  { src: quantum, alt: "quantum logo" },
  { src: echo, alt: "echo logo" },
  { src: celestia, alt: "celestia logo" },
  { src: pulse, alt: "pulse logo" },
  { src: apex, alt: "apex logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">Trusted by the world's most innovative teams</h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-team-gradient after:bg-team-gradient">
          <div className="flex gap-20 sm:justify-center">
            {images.map(({ src, alt }, index) => (
              <Image
                key={index}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
