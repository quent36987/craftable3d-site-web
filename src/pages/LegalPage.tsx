import React from 'react';
import { Navbar } from '../components/Navbar';
import { Legal } from '../components/Legal';
import { Footer } from '../components/Footer';

export function LegalPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Legal />
      <Footer />
    </div>
  );
}