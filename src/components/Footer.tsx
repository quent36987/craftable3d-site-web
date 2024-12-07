import React from 'react';
import { Link } from 'react-router-dom';
import { Printer } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Printer className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Craftable3D</span>
            </div>
            <p className="text-gray-400">
              Solutions d'impression 3D professionnelles pour tous vos projets
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Impression 3D</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Modélisation</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Réparation</a></li>
              <li>
                <a 
                  href="https://boutique.cybermaniac.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Boutique en ligne
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/legal" className="text-gray-400 hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link to="/legal" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/legal" className="text-gray-400 hover:text-white transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Craftable3D. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}