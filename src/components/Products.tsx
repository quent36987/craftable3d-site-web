import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const products = [
  {
    image: "/produit/img1.png",
    title: "Bobine PLA ForShape",
    description: "Bobine de filament PLA haute qualité, idéale pour des impressions durables et esthétiques.",
    tags: ["PLA", "Haute qualité", "Impression facile"]
  },
  {
    image: "/produit/img2.png",
    title: "Bobine PETG ForShape",
    description: "Filament PETG robuste et résistant à la chaleur, parfait pour des projets techniques.",
    tags: ["PETG", "Résistance", "Projets techniques"]
  },
  {
    image: "/produit/img3.png",
    title: "Figurine Majin Vegeta",
    description: "Sublime figurine de Majin Vegeta, imprimée en 3D avec des détails saisissants.",
    tags: ["Figurine", "Majin Vegeta", "Collection"]
  },
  {
    image: "/produit/img4.png",
    title: "Lapin Crochet (Impression 3D)",
    description: "Adorable lapin au style crochet, imprimé en 3D avec une finition unique.",
    tags: ["Artisanat", "Décoration", "Impression 3D"]
  },
  {
    image: "/produit/img5.png",
    title: "Imprimante 3D Wanhao D12 230",
    description: "Imprimante 3D fiable et performante pour vos créations et prototypes.",
    tags: ["Imprimante 3D", "Performance", "Prototypage"]
  },
  {
    image: "/produit/img6.png",
    title: "Buse MK8 0.4mm",
    description: "Buse en nylon de haute précision pour des impressions nettes et détaillées.",
    tags: ["Accessoire", "MK8", "Précision"]
  },
  {
    image: "/produit/img7.png",
    title: "Sangohan (Impression 3D)",
    description: "Figurine de Sangohan réalisée en 3D, peinte à la main pour un rendu exceptionnel.",
    tags: ["Sangohan", "Peint à la main", "Artisanat"]
  }
];

export function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // État pour suivre l'index actif
  const [activeIndex, setActiveIndex] = useState(0);

  return (
      <section id="products" className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos produits et services en impression 3D
            </p>
          </motion.div>

          <div ref={ref} className="relative">
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="w-full py-12"
                onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Met à jour l'index actif
            >
              {products.map((product, index) => (
                  <SwiperSlide key={index} className="w-[300px] sm:w-[400px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative group ${index === activeIndex ? 'hover-active' : ''}`} // Ajoute une classe spécifique si actif
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                            src={product.image}
                            alt={product.title}
                            className={`w-full h-[400px] object-cover transform transition-transform duration-500 ${
                                index === activeIndex ? 'scale-110' : 'group-hover:scale-110'
                            }`}
                        />
                        <div
                            className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                                index === activeIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            }`}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                            <p className="text-sm mb-4">{product.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {product.tags.map((tag, idx) => (
                                  <span
                                      key={idx}
                                      className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                                  >
                              {tag}
                            </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
  );
}
