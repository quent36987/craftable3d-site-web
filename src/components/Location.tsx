import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, Phone, Mail, Clock } from 'lucide-react';

const openingHours = [
  { day: 'LUNDI', morning: '9h00 - 12h00', afternoon: '14h00 - 19h00' },
  { day: 'MARDI', morning: '9h00 - 12h00', afternoon: '14h00 - 19h00' },
  { day: 'MERCREDI', morning: '9h00 - 12h00', afternoon: '14h00 - 19h00' },
  { day: 'JEUDI', morning: '9h00 - 12h00', afternoon: '14h00 - 19h00' },
  { day: 'VENDREDI', morning: '9h00 - 12h00', afternoon: '14h00 - 19h00' },
  { day: 'SAMEDI', morning: 'sur rdv', afternoon: 'sur rdv' },
  { day: 'DIMANCHE', morning: 'fermé', afternoon: 'fermé' },
];

export function Location() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nous Trouver</h2>
          <p className="text-xl text-gray-600">Venez nous rencontrer dans notre atelier</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">CyberManiac</h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-600">
                      72 boulevard Alexandre de Fraissinette<br />
                      42100 Saint-Étienne
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-600">04.87.66.67.33</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-600">Craftable3D@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">Horaires d'ouverture</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-2 text-left text-gray-600">Jour</th>
                      <th className="py-2 text-left text-gray-600">Matin</th>
                      <th className="py-2 text-left text-gray-600">Après-midi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {openingHours.map((day) => (
                      <tr key={day.day} className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-900">{day.day}</td>
                        <td className="py-2 text-gray-600">{day.morning}</td>
                        <td className="py-2 text-gray-600">{day.afternoon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full min-h-[450px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1177.4808507534615!2d4.41848449624177!3d45.418671087137064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5a91384d12ab7%3A0x1aa837c59bcf3f77!2s72%20Bd%20Alexandre%20de%20Fraissinette%2C%2042100%20Saint-%C3%89tienne!5e0!3m2!1sen!2sfr!4v1693817451366!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}