import React from 'react';
import { Users, Brain, Heart, Coffee, ShieldCheck, Video } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t('services.individual.title'),
      desc: t('services.individual.desc'),
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('services.couples.title'),
      desc: t('services.couples.desc'),
      color: "bg-rose-50 text-rose-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: t('services.child.title'),
      desc: t('services.child.desc'),
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: t('services.teletherapy.title'),
      desc: t('services.teletherapy.desc'),
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: t('services.group.title'),
      desc: t('services.group.desc'),
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: t('services.addiction.title'),
      desc: t('services.addiction.desc'),
      color: "bg-slate-50 text-slate-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4">{t('services.badge')}</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.title')}</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          {t('services.description')}
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div 
            key={idx}
            className="group p-8 rounded-3xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${s.color}`}>
              {s.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
            <p className="text-slate-600 leading-relaxed mb-6">
              {s.desc}
            </p>
            <a href="#booking" className="text-emerald-600 font-bold flex items-center gap-2 group/link">
              {t('services.read_more')}
              <span className="block w-4 h-[2px] bg-emerald-600 transition-all group-hover/link:w-8" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};