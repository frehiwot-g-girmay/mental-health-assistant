import React from 'react';
import { Star, Mail, Calendar, Banknote, Award, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const MentalHealthProfessionals = () => {
  const { t } = useTranslation();

  const professionals = [
    {
      name: t('professionals.martha'),
      specialty: t('professionals.martha_specialty'),
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/dr--martha-bekele-140497c2-1774800796396.webp",
      experience: `12 ${t('professionals.experience')}`,
      rating: 4.9,
      reviews: 128,
      hourlyRate: 850
    },
    {
      name: t('professionals.dawit'),
      specialty: t('professionals.dawit_specialty'),
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/dr--dawit-solomon-33981e2f-1774800796605.webp",
      experience: `15 ${t('professionals.experience')}`,
      rating: 5.0,
      reviews: 245,
      hourlyRate: 1200
    },
    {
      name: t('professionals.kirubel'),
      specialty: t('professionals.kirubel_specialty'),
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/dr--kirubel-tadesse-7d76f5fb-1774800796023.webp",
      experience: `8 ${t('professionals.experience')}`,
      rating: 4.8,
      reviews: 94,
      hourlyRate: 600
    }
  ];

  const handleMessageClick = (pro: any) => {
    // Dispatch custom event to open DM in Chatbot component
    const event = new CustomEvent('open-dm', { detail: pro });
    window.dispatchEvent(event);
    
    // Smooth scroll to chatbot if on mobile
    const chatbot = document.getElementById('chatbot');
    if (chatbot && window.innerWidth < 768) {
      chatbot.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="professionals" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4">{t('professionals.badge')}</h2>
          <h3 className="text-4xl font-bold text-slate-900">{t('professionals.title')}</h3>
        </div>
        <p className="text-slate-600 max-w-md leading-relaxed">
          {t('professionals.description')}
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {professionals.map((pro, idx) => (
          <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col">
            <div className="h-72 overflow-hidden relative">
              <img 
                src={pro.image} 
                alt={pro.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold shadow-sm">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                {pro.rating}
              </div>
              <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-bold shadow-lg">
                <Banknote className="w-4 h-4" />
                {pro.hourlyRate} ETB{t('professionals.per_hour')}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h4 className="text-xl font-bold text-slate-900 mb-1">{pro.name}</h4>
              <p className="text-emerald-600 font-medium text-sm mb-4">{pro.specialty}</p>
              
              <div className="flex items-center gap-4 py-4 border-y border-slate-50 mb-6">
                <div className="flex-1">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">{t('professionals.experience')}</p>
                  <p className="font-bold text-slate-800 text-sm flex items-center gap-1">
                    <Award className="w-3 h-3 text-emerald-500" />
                    {pro.experience}
                  </p>
                </div>
                <div className="w-px h-8 bg-slate-100" />
                <div className="flex-1">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">{t('professionals.hourly_rate')}</p>
                  <p className="font-bold text-slate-800 text-sm">
                    {pro.hourlyRate} ETB
                  </p>
                </div>
              </div>

              <div className="mt-auto space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => handleMessageClick(pro)}
                    className="flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 py-3 rounded-xl font-bold hover:bg-emerald-100 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {t('professionals.message')}
                  </button>
                  <a 
                    href="tel:952"
                    className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {t('professionals.call')}
                  </a>
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100">
                  <Calendar className="w-4 h-4" />
                  {t('professionals.book')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};