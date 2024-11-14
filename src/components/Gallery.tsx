import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    {
      src: "https://erinastudiofit.boo.jp/img/yachiyo/yachiyo-interior-1.jpg",
      alt: "店内の様子1"
    },
    {
      src: "https://erinastudiofit.boo.jp/img/yachiyo/yachiyo-interior-2.jpg",
      alt: "店内の様子2"
    },
    {
      src: "https://erinastudiofit.boo.jp/img/yachiyo/yachiyo-entrance.jpg",
      alt: "入口の様子"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="section-padding bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-12 text-center text-amber-300">店内ギャラリー</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};