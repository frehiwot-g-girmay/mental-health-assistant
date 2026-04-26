import React from 'react';
import { Wind, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HealthTips = () => {
  const { t } = useTranslation();

  const tips = [
    {
      icon: <Wind className="w-6 h-6" />,
      text: t('health_tips.breathing'),
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Sun className="w-6 h-6" />,
      text: t('health_tips.sunlight'),
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: <Moon className="w-6 h-6" />,
      text: t('health_tips.sleep'),
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section className="py-8 bg-emerald-600 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...tips, ...tips, ...tips].map((tip, i) => (
          <div key={i} className="flex items-center gap-4 mx-12 text-white font-medium">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              {tip.icon}
            </div>
            <span>{tip.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};