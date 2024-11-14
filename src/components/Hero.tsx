import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="parallax">
      <img 
        src="https://erinastudiofit.boo.jp/img/yachiyo/yachiyo-entrance01.jpg" 
        alt="スナック八千代の外観"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-medium mb-4 tracking-wider"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
            >
              スナック
              <motion.span 
                className="block mt-2 text-amber-300"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                八千代
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mt-6 tracking-widest text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              品川区大井町の洗練された空間
            </motion.p>
          </motion.div>
          <motion.button
            onClick={scrollToAbout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown className="w-8 h-8 animate-bounce text-amber-300" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};