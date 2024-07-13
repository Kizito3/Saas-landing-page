'use client'
import Image from 'next/image';
import Product from '../assets/AppNight.png';
import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';

export const ProductShowcase = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const {scrollYProgress} = useScroll({
    target: imgRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress,[0,1], [15,0]);
  const opacity = useTransform(scrollYProgress, [0,1], [0.5,1])
    return (
      <div className="bg-black text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24">
        <div className="container">
          <h2 className="text-5xl sm:text-6xl font-bold text-center tracking-tighter">
            Intuitive interface
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-xl text-center text-white/70 mt-5">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes, one task at a time.
            </p>
          </div>
          <div className="flex justify-center">
            <motion.div
              style={{
                opacity: opacity,
                rotateX: rotateX,
                transformPerspective: "800px",
              }}
            >
              <Image src={Product} alt="app" className="mt-14" ref={imgRef} />
            </motion.div>
          </div>
        </div>
      </div>
    );
}