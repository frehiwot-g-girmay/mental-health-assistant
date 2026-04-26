import React from 'react';
import { Star, Mail, Calendar, Banknote, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Doctors = () => {
  const { t } = useTranslation();

  const doctors = [
    {
      name: t('doctors.martha'),
      specialty: t('doctors.martha_specialty'),
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/dr--martha-bekele-140497c2-1774800796396.webp",
      experience: `12 ${t('doctors.experience')}`,
      rating: 4.9,
      reviews: 128,
      hourlyRate: 850
    },
    {
      name: t('doctors.dawit'),
      specialty: t('doctors.dawit_specialty'),
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/dr--dawit-solomon-33981e2f-1774800796605.webp",
      experience: `15 ${t('doctors.experience')}`,
      rating: 5.0,
      reviews: 245,
      hourlyRate: 1200
    },
    {
      name: t('doctors.kirubel'),
      specialty: t('doctors.kirubel_specialty'),
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/dr--kirubel-tadesse-7d76f5fb-1774800796023.webp",
      experience: `8 ${t('doctors.experience')}`,
      rating: 4.8,
      reviews: 94,
      hourlyRate: 600
    }
  ];

  return (
    <section id="doctors" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4">{t('doctors.badge')}</h2>
          <h3 className="text-4xl font-bold text-slate-900">{t('doctors.title')}</h3>
        </div>
        <p className="text-slate-600 max-w-md leading-relaxed">
          {t('doctors.description')}
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((dr, idx) => (
          <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col">
            <div className="h-72 overflow-hidden relative">
              <img 
                src={dr.image} 
                alt={dr.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold shadow-sm">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                {dr.rating}
              </div>
              <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-bold shadow-lg">
                <Banknote className="w-4 h-4" />
                {dr.hourlyRate} ETB{t('doctors.per_hour')}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h4 className="text-xl font-bold text-slate-900 mb-1">{dr.name}</h4>
              <p className="text-emerald-600 font-medium text-sm mb-4">{dr.specialty}</p>
              
              <div className="flex items-center gap-4 py-4 border-y border-slate-50 mb-6">
                <div className="flex-1">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">{t('doctors.experience')}</p>
                  <p className="font-bold text-slate-800 text-sm flex items-center gap-1">
                    <Award className="w-3 h-3 text-emerald-500" />
                    {dr.experience}
                  </p>
                </div>
                <div className="w-px h-8 bg-slate-100" />
                <div className="flex-1">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">{t('doctors.hourly_rate')}</p>
                  <p className="font-bold text-slate-800 text-sm">
                    {dr.hourlyRate} ETB
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 py-3 rounded-xl font-bold hover:bg-emerald-100 transition-colors">
                    <Mail className="w-4 h-4" />
                    {t('doctors.message')}
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100">
                    <Calendar className="w-4 h-4" />
                    {t('doctors.book')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};