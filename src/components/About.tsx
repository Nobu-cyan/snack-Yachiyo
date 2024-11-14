import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlassWater, Music, Clock } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: GlassWater,
      title: '飲み放題',
      price: '5,000円',
      description: '時間制限なし・お通し付き'
    },
    {
      icon: Music,
      title: 'カラオケ',
      price: '歌い放題',
      description: '充実の選曲数'
    },
    {
      icon: Clock,
      title: '営業時間',
      price: '19:00～24:00',
      description: '日曜・祝日定休'
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
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-8 text-amber-300">心安らぐ大人の社交場</h2>
        <p className="text-lg mb-12 leading-relaxed text-gray-300 max-w-2xl mx-auto">
          オープンして17年。品川区大井町で愛され続けるスナック八千代では、
          落ち着いた雰囲気の中で上質なひとときをお過ごしいただけます。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};