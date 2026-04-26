import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Testimonials = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: t('testimonials.saba_name'),
      text: t('testimonials.saba_text'),
      role: t('testimonials.role')
    },
    {
      name: t('testimonials.jonas_name'),
      text: t('testimonials.jonas_text'),
      role: t('testimonials.role')
    },
    {
      name: t('testimonials.leyu_name'),
      text: t('testimonials.leyu_text'),
      role: t('testimonials.role')
    }
  ];

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4">
          {t('testimonials.badge')}
        </h2>
        <h3 className="text-4xl font-bold text-white">
          {t('testimonials.title')}
        </h3>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700 relative group hover:-translate-y-2 transition-transform">
            <Quote className="absolute top-8 right-8 w-12 h-12 text-emerald-500/10" />
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-emerald-500 fill-emerald-500" />)}
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
              "{r.text}"
            </p>
            <div>
              <p className="text-white font-bold">{r.name}</p>
              <p className="text-slate-500 text-sm">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};