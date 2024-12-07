import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
              <div className="flex items-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Printer className="h-8 w-8 text-blue-400" />
                </motion.div>
                <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                Craftable3D
              </span>
              </div>
              <p className="text-gray-400">
                Solutions d'impression 3D professionnelles pour tous vos projets
              </p>
              <div className="flex space-x-4">
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>

            {[
              {
                title: "Services",
                links: [
                  { name: "Impression 3D", href: "/#services" },
                  { name: "Modélisation", href: "/#services" },
                  { name: "Réparation", href: "/#services" },
                  { name: "Boutique en ligne", href: "https://boutique.cybermaniac.fr/" }
                ]
              },
              {
                title: "Entreprise",
                links: [
                  { name: "À propos", href: "/#about" },
                  { name: "Contact", href: "/#contact" },
                  { name: "Portfolio", href: "/#portfolio" }
                ]
              },
              {
                title: "Légal",
                links: [
                  { name: "Mentions légales", href: "/legal" },
                  { name: "Politique de confidentialité", href: "/legal" },
                  { name: "CGV", href: "/legal" }
                ]
              }
            ].map((section, index) => (
                <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <motion.a
                              whileHover={{ x: 5 }}
                              href={link.href}
                              className="text-gray-400 hover:text-white transition-colors inline-block"
                          >
                            {link.name}
                          </motion.a>
                        </li>
                    ))}
                  </ul>
                </motion.div>
            ))}
          </div>

          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          >
            <p>&copy; {new Date().getFullYear()} Craftable3D. Tous droits réservés.</p>
          </motion.div>
        </div>
      </footer>
  );
}