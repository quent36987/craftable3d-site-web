import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Printer, ShoppingBag } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Printer className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Craftable3D</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="/#products" className="text-gray-700 hover:text-blue-600 transition-colors">Produits</a>
            <a href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <a
              href="https://boutique.cybermaniac.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              Boutique en ligne
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="/#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
            <a href="/#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Produits</a>
            <a href="/#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">À propos</a>
            <a href="/#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <a
              href="https://boutique.cybermaniac.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-blue-600"
            >
              <ShoppingBag className="h-5 w-5" />
              Boutique en ligne
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}