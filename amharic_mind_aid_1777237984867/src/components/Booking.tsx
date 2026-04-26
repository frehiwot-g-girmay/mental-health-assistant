import React, { useState } from 'react';
import { Calendar, Clock, Video, User, ChevronRight, Phone, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const Booking = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    type: 'physical',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
      return;
    }
    toast.success(t('booking.success'), {
      description: t('booking.success_desc'),
    });
    setStep(1);
    setFormData({ name: '', email: '', phone: '', date: '', time: '', type: 'physical', reason: '' });
  };

  return (
    <section id="booking" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('booking.title')}</h2>
        <p className="text-slate-600">{t('booking.subtitle')}</p>
      </div>

      <div className="flex gap-4 mb-8">
        <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-emerald-600' : 'bg-slate-100'}`} />
        <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-emerald-600' : 'bg-slate-100'}`} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">{t('booking.service_type')}</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, type: 'physical'})}
                  className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${formData.type === 'physical' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                >
                  <User className="w-4 h-4" />
                  {t('booking.physical')}
                </button>
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, type: 'virtual'})}
                  className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${formData.type === 'virtual' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                >
                  <Video className="w-4 h-4" />
                  {t('booking.virtual')}
                </button>
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, type: 'call'})}
                  className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${formData.type === 'call' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                >
                  <Phone className="w-4 h-4" />
                  {t('booking.call')}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600" /> {t('booking.date')}
                </label>
                <input 
                  type="date" 
                  required
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" /> {t('booking.time')}
                </label>
                <select 
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                  value={formData.time}
                  required
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                >
                  <option value="">{t('booking.select_time')}</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="02:00">02:00 PM</option>
                  <option value="04:00">04:00 PM</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">{t('booking.full_name')}</label>
              <input 
                type="text" 
                required
                placeholder={t('booking.name_placeholder')}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('booking.email')}</label>
                <input 
                  type="email" 
                  required
                  placeholder="example@mail.com"
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('booking.phone')}</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+251 9..."
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">{t('booking.reason')}</label>
              <textarea 
                rows={3}
                placeholder={t('booking.reason_placeholder')}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
              />
            </div>
          </div>
        )}

        <div className="flex gap-4">
          {step === 2 && (
            <button 
              type="button"
              onClick={() => setStep(1)}
              className="px-8 py-4 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              {t('booking.back')}
            </button>
          )}
          <button 
            type="submit"
            className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-2"
          >
            {step === 1 ? t('booking.next') : t('booking.confirm')}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </form>

      <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-center">
        <a 
          href="tel:952" 
          className="flex items-center gap-3 text-emerald-700 font-bold hover:text-emerald-800 transition-colors bg-emerald-50 px-6 py-3 rounded-2xl"
        >
          <AlertCircle className="w-5 h-5 animate-pulse" />
          {t('booking.call_now')}
        </a>
      </div>
    </section>
  );
};