import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Printer, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center"
            >
              <Link to="/" className="flex items-center group">
                <img className="mx-auto text-blue-600"
                     style={{height: "40px"}}
                     src="/logo/logo.png"/>
                <span
                    className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Craftable3D
              </span>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['services', 'products', 'about', 'contact'].map((item, index) => (
                  <motion.a
                      key={item}
                      href={`/#${item}`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-gray-700 hover:text-blue-600 transition-colors relative group"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                  </motion.a>
              ))}
              <motion.a
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://boutique.cybermaniac.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <ShoppingBag className="h-5 w-5" />
                Boutique en ligne
              </motion.a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden overflow-hidden bg-white/90 backdrop-blur-md"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {['services', 'products', 'about', 'contact'].map((item, index) => (
                      <motion.a
                          key={item}
                          href={`/#${item}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          onClick={() => setIsOpen(false)}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </motion.a>
                  ))}
                  <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      href="https://boutique.cybermaniac.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      onClick={() => setIsOpen(false)}
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Boutique en ligne
                  </motion.a>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
}