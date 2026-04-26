import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
              <ShieldCheck className="w-4 h-4" />
              {t('hero.badge')}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1]">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#booking" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200"
              >
                {t('hero.cta_booking')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#chatbot" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-emerald-600 border-2 border-emerald-600 font-bold text-lg hover:bg-emerald-50 transition-all"
              >
                {t('hero.cta_chat')}
                <MessageCircle className="ml-2 w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <p className="text-sm text-slate-500">
                {t('hero.stats')}
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/dr--martha-bekele-profile-3c39f4cd-1774798510666.webp" 
                alt="Mental Health Expert" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold text-xl">
                  98%
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t('hero.satisfaction')}</p>
                  <p className="text-xs text-slate-500">{t('hero.study')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};