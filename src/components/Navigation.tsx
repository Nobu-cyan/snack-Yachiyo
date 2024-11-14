import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'トップ', target: 'hero' },
    { title: '特徴', target: 'about' },
    { title: 'ギャラリー', target: 'gallery' },
    { title: 'アクセス', target: 'access' }
  ];

  const scrollToSection = (target: string) => {
    setIsOpen(false);
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden text-amber-300 hover:text-amber-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
            
            <div className="hidden lg:flex space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.target}
                  whileHover={{ scale: 1.05, color: '#FCD34D' }}
                  className="text-gray-300 hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => scrollToSection(item.target)}
                >
                  {item.title}
                </motion.button>
              ))}
            </div>

            <motion.a
              href="tel:03-3458-9119"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center px-4 py-2 rounded-full bg-amber-300 text-black font-medium hover:bg-amber-400 transition-colors"
            >
              お電話
            </motion.a>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md">
              <div className="flex justify-end p-4">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="text-amber-300"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>
              
              <motion.div
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                className="flex flex-col items-center justify-center h-full"
              >
                {menuItems.map((item) => (
                  <motion.button
                    key={item.target}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                    className="text-2xl text-gray-300 hover:text-amber-300 py-4 transition-colors"
                    onClick={() => scrollToSection(item.target)}
                  >
                    {item.title}
                  </motion.button>
                ))}
                
                <motion.a
                  href="tel:03-3458-9119"
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                  className="mt-8 px-8 py-3 rounded-full bg-amber-300 text-black font-medium hover:bg-amber-400 transition-colors"
                >
                  お電話する
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};