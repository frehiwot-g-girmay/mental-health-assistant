import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'am', name: '\u12a0\u121b\u122d\u129b' },
  { code: 'ti', name: '\u1275\u130d\u122d\u129b' },
  { code: 'om', name: 'Afaan Oromoo' },
  { code: 'en', name: 'English' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors">
        <Globe className="w-4 h-4 text-emerald-600" />
        <span className="text-sm font-medium uppercase">{i18n.language.split('-')[0]}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <div className="p-2 space-y-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                i18n.language.startsWith(lang.code)
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'hover:bg-slate-50 text-slate-600'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};