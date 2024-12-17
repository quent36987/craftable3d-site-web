import React from 'react';
import { motion } from 'framer-motion';
import {Printer, ChevronDown, Image} from 'lucide-react';
import { GeometricBackground } from './GeometricBackground';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center">
      <GeometricBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="relative inline-block mb-8"
          >
            <motion.div

              className="relative z-10"
            >
              {/*<Printer className="h-20 w-20 mx-auto text-blue-600" />*/}
              <img className="mx-auto text-blue-600"
                  style={{ height: "110px"}}
                   src="/logo/logo.png" />
            </motion.div>
            <div className="absolute inset-0 bg-blue-400 rounded-full filter blur-xl opacity-30 animate-pulse"></div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">
              Donnez vie à vos idées
            </span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block text-4xl md:text-5xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
            >
              avec l'impression 3D
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/30 p-6 rounded-xl"
          >
            De la conception à la réalisation, Craftable3D vous accompagne dans tous vos projets d'impression 3D.
            Expertise, qualité et innovation au service de votre créativité.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden"
            >
              <span className="relative z-10">Découvrir nos services</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
            >
              <span className="relative z-10">Nous contacter</span>
              <div className="absolute inset-0 bg-blue-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="h-8 w-8 text-blue-600" />
      </motion.div>
    </div>
  );
}