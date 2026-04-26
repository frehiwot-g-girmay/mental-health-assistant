import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, ClipboardCheck, Zap, Send, Banknote } from 'lucide-react';
import { toast } from 'sonner';

export const PractitionerApplication = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success(t('practitioner.form.success'));
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="apply" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-emerald-50 rounded-[3rem] p-12 text-center border-2 border-emerald-100">
            <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
              <ClipboardCheck className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('practitioner.form.success')}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('practitioner.form.success_desc')}
            </p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="mt-8 text-emerald-600 font-bold hover:underline"
            >
              {t('booking.back')}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider mb-6">
                {t('practitioner.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {t('practitioner.title')}
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                {t('practitioner.description')}
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t('practitioner.benefit1')}</h4>
                    <p className="text-slate-500">{t('practitioner.benefit1_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t('practitioner.benefit3')}</h4>
                    <p className="text-slate-500">{t('practitioner.benefit3_desc')}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/hiwot-practitioner-team-9bc0beda-1774800801504.webp" 
                  alt="Hiwot Practitioners" 
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">{t('practitioner.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t('practitioner.form.fullName')}</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white text-slate-900"
                    placeholder={t('practitioner.form.fullNamePlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t('practitioner.form.email')}</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white text-slate-900"
                    placeholder={t('practitioner.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t('practitioner.form.specialty')}</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white text-slate-900"
                    placeholder={t('practitioner.form.specialtyPlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t('practitioner.form.experience')}</label>
                  <input 
                    required
                    type="number" 
                    className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white text-slate-900"
                    placeholder={t('practitioner.form.experiencePlaceholder')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">{t('practitioner.form.hourlyRate')}</label>
                <div className="relative">
                  <input 
                    required
                    type="number" 
                    className="w-full pl-12 pr-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white text-slate-900"
                    placeholder={t('practitioner.form.hourlyRatePlaceholder')}
                  />
                  <Banknote className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">{t('practitioner.form.message')}</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white text-slate-900 resize-none"
                  placeholder={t('practitioner.form.messagePlaceholder')}
                ></textarea>
              </div>

              <button 
                disabled={isSubmitting}
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {isSubmitting ? (
                   <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    {t('practitioner.cta')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};