import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Printer, Box, Cog, Factory } from 'lucide-react';

const services = [
  {
    icon: Printer,
    title: "Impression 3D FDM",
    description: "Impression en filament pour vos projets techniques et créatifs",
    features: [
      "Pièces fonctionnelles",
      "Prototypes",
      "Objets décoratifs"
    ],
    image: "/impression/image1.jpg"
  },
  {
    icon: Box,
    title: "Impression 3D Résine",
    description: "Haute précision pour les détails fins",
    features: [
      "Figurines",
      "Bijouterie",
      "Prototypes détaillés"
    ],
    image: "/impression/image3.jpg"
  },
  {
    icon: Factory,
    title: "Services Professionnels",
    description: "Solutions pour entreprises et particuliers",
    features: [
      "Pièces techniques",
      "Prototypage rapide",
      "Production en série"
    ],
    image: "/impression/image20.jpg"
  }
];

export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous disposons d'une large gamme d'imprimantes 3D, ce qui nous permet d'avoir une grande liberté 
            concernant nos impressions ou vos projets tant sur l'impression résine que sur les impressions en filament.
          </p>
        </div>

        <div ref={ref} className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl" />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-xl text-gray-600">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Cog className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Demande de Devis</h3>
          <p className="text-gray-600 mb-8">
            Pour toute demande de devis ou information supplémentaire, n'hésitez pas à nous contacter 
            en boutique ou par téléphone.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}