import React from 'react';
import { useTranslation } from 'react-i18next';

const partners = [
  { name: "United Insurance", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Check-mark-24-512.png" },
  { name: "Nyangombe", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Check-mark-24-512.png" },
  { name: "Ethiopian Insurance", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Check-mark-24-512.png" },
  { name: "Global Insurance", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Check-mark-24-512.png" }
];

export const Insurance = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-10">
          {t('insurance.title')}
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
              <span className="text-xl font-bold text-slate-800">{p.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
          {t('insurance.description')}
        </p>
      </div>
    </section>
  );
};