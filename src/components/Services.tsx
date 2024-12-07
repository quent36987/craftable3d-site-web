import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Printer, Shapes, Wrench, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: Printer,
    title: "Impression 3D",
    description: "Service d'impression 3D professionnel avec une large gamme de matériaux disponibles pour répondre à vos besoins spécifiques."
  },
  {
    icon: Shapes,
    title: "Modélisation 3D",
    description: "Création de modèles 3D sur mesure, optimisation de fichiers existants et conseil en conception."
  },
  {
    icon: Wrench,
    title: "Réparation & Maintenance",
    description: "Service de réparation et maintenance d'imprimantes 3D toutes marques, diagnostic et optimisation."
  },
  {
    icon: ShoppingBag,
    title: "Vente de Matériel",
    description: "Large sélection de filaments, pièces détachées et accessoires pour l'impression 3D."
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Nos Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Des solutions complètes pour tous vos besoins en impression 3D
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-lg p-4">
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}