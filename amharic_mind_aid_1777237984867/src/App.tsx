import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { MentalHealthProfessionals } from './components/MentalHealthProfessionals';
import { Booking } from './components/Booking';
import { Chatbot } from './components/Chatbot';
import { Blog } from './components/Blog';
import { Insurance } from './components/Insurance';
import { HealthTips } from './components/HealthTips';
import { Testimonials } from './components/Testimonials';
import { PractitionerApplication } from './components/PractitionerApplication';
import { Toaster } from 'sonner';
import './i18n/config';

function App() {
  return (
    <Layout>
      <Toaster position="top-center" richColors />
      <div className="flex flex-col gap-0">
        <Hero />
        <HealthTips />
        <Services />
        <MentalHealthProfessionals />
        <div className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Booking />
              <div className="hidden lg:block">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/hiwot-clinic-interior-63530c4c-1774798510413.webp" 
                  alt="Hiwot Clinic Interior" 
                  className="rounded-2xl shadow-xl h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <PractitionerApplication />
        <Blog />
        <Testimonials />
        <Insurance />
      </div>
      <Chatbot />
    </Layout>
  );
}

export default App;