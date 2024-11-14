import React from 'react';
import { MapPin, Clock, Phone, MapIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Access = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="section-padding bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-12 text-center text-amber-300">アクセス</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-lg">
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <MapPin className="w-6 h-6 mr-3 text-amber-300" />
                <h3 className="text-xl">住所</h3>
              </div>
              <p className="text-gray-300 ml-9">〒140-0011</p>
              <p className="text-gray-300 ml-9">東京都品川区東大井5-4-19</p>
            </div>
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <Phone className="w-6 h-6 mr-3 text-amber-300" />
                <h3 className="text-xl">電話番号</h3>
              </div>
              <p className="ml-9"><a href="tel:03-3458-9119" className="hover-golden">03-3458-9119</a></p>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <MapIcon className="w-6 h-6 mr-3 text-amber-300" />
                <h3 className="text-xl">アクセス</h3>
              </div>
              <p className="text-gray-300 ml-9 mb-2">大井町駅 徒歩2分</p>
              <p className="text-sm text-gray-400 ml-9">
                東口から左に50m進み、左側のすずらん通りに入って100m先の
                アジアンダイニング東方のところで右折してすぐ。
              </p>
            </div>
          </div>
          <div className="h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.7285714285714!2d139.73433611524542!3d35.60785748021094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a615f95008f%3A0x4c8e0c791b8161d0!2z5p2x5aSn5LqV77yV5LiB55uu77yU4oiS77yR77yZ!5e0!3m2!1sja!2sjp!4v1645000000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};