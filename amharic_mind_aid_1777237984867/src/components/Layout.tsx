import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, HeartPulse, ShieldCheck, Calendar, UserPlus } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ href, children, onClick }: NavItemProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-slate-600 hover:text-emerald-600 font-medium transition-colors py-2 px-1 border-b-2 border-transparent hover:border-emerald-600"
  >
    {children}
  </a>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      {/* Emergency Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-semibold sticky top-0 z-[60]">
        <span className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 animate-pulse" />
          {t('nav.emergency')}
        </span>
      </div>

      <header className={cn("sticky top-8 z-50 transition-all duration-300 px-4", scrolled ? "mt-0" : "mt-4")}>
        <nav className={cn("max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300", scrolled ? "bg-white/80 backdrop-blur-md shadow-lg border border-slate-200/50" : "bg-white shadow-sm border border-slate-100")}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-emerald-950">
              <span className="text-emerald-600">{t('brand.name')}</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#services">{t('nav.services')}</NavItem>
            <NavItem href="#mental-health-professionals">{t('nav.professionals')}</NavItem>
            <NavItem href="#blog">{t('nav.blog')}</NavItem>
            <NavItem href="#apply">{t('nav.apply')}</NavItem>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a href="#booking" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {t('nav.booking')}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button className="p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-4">
            <a href="#services" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a>
            <a href="#mental-health-professionals" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>{t('nav.professionals')}</a>
            <a href="#blog" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>{t('nav.blog')}</a>
            <a href="#apply" className="text-lg font-medium p-2 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}><UserPlus className="w-4 h-4 text-emerald-600" /> {t('nav.apply')}</a>
            <a href="#booking" className="text-lg font-medium p-2 bg-emerald-600 text-white rounded-xl text-center" onClick={() => setIsMenuOpen(false)}>{t('nav.booking')}</a>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <HeartPulse className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold">{t('brand.name')}</span>
            </div>
            <p className="text-slate-400 leading-relaxed">{t('footer.description')}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-emerald-500" /> +251 11 123 4567</li>
              <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-emerald-500" /> info@hiwothealth.et</li>
              <li className="flex items-center gap-3 text-red-400 font-bold"><Phone className="w-4 h-4" /> {t('footer.emergency')}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Links</h4>
            <ul className="space-y-3">
              <li><a href="#apply" className="hover:text-emerald-500 transition-colors">{t('nav.apply')}</a></li>
              <li><a href="#mental-health-professionals" className="hover:text-emerald-500 transition-colors">{t('nav.professionals')}</a></li>
              <li><a href="#services" className="hover:text-emerald-500 transition-colors">{t('nav.services')}</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};