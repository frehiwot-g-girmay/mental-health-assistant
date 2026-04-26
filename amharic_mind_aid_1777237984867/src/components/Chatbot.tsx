import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, User, ArrowLeft, Phone } from 'lucide-react';
import { clsx as clsxRaw, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsxRaw(inputs));
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'pro';
  timestamp: Date;
  isAction?: boolean;
}

interface Professional {
  id?: string;
  name: string;
  image?: string;
  specialty?: string;
}

export const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'ai' | 'dm'>('ai');
  const [activePro, setActivePro] = useState<Professional | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('chatbot.initial_msg'),
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const SUGGESTIONS = [
    t('chatbot.suggestions.anxiety'),
    t('chatbot.suggestions.booking'),
    t('chatbot.suggestions.professionals'),
    t('chatbot.suggestions.emergency'),
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  // Listen for direct message requests from other components
  useEffect(() => {
    const handleOpenDM = (event: any) => {
      const pro = event.detail;
      setMode('dm');
      setActivePro(pro);
      setIsOpen(true);
      setMessages([
        {
          id: 'dm-1',
          text: t('chatbot.direct_message_with', { name: pro.name }),
          sender: 'pro',
          timestamp: new Date(),
        }
      ]);
    };

    window.addEventListener('open-dm', handleOpenDM);
    return () => window.removeEventListener('open-dm', handleOpenDM);
  }, [t]);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    if (mode === 'ai') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const responseText = getBotResponse(text);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          sender: 'bot',
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, botMsg]);

        // If response is about professional/anxiety, add an action button
        if (responseText.includes('professional') || responseText.includes('specialist')) {
           setMessages(prev => [...prev, {
             id: 'action-' + Date.now(),
             text: t('chatbot.connect_pro'),
             sender: 'bot',
             timestamp: new Date(),
             isAction: true
           }]);
        }
      }, 1500);
    } else {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const proMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: t('chatbot.responses.pro_simulated', { name: activePro?.name }),
          sender: 'pro',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, proMsg]);
      }, 2500);
    }
  };

  const getBotResponse = (input: string): string => {
    const text = input.toLowerCase();
    
    // Anxiety keywords (EN, AM, TI, OM)
    if (text.includes('anxiety') || text.includes('\u132d\u1295\u1240\u1275') || text.includes('yaaddoo')) 
      return t('chatbot.responses.anxiety');
      
    // Booking keywords
    if (text.includes('book') || text.includes('\u1240\u1320\u122e') || text.includes('\u1246\u1338\u122b') || text.includes('beellama')) 
      return t('chatbot.responses.booking');
      
    // Professional keywords
    if (text.includes('professional') || text.includes('doctor') || text.includes('\u1263\u1208\u1219\u12eb') || text.includes('\u1213\u12aa\u121d') || text.includes('\u1213\u12ab\u12ed\u121d') || text.includes('\u12f6\u12ad\u1270\u122d') || text.includes('ogeessa')) 
      return t('chatbot.responses.professionals');
      
    // Emergency keywords
    if (text.includes('emergency') || text.includes('\u12a0\u12f0\u130b') || text.includes('\u1205\u1339\u133d') || text.includes('\u1213\u12f0\u130b') || text.includes('\u12a0\u1235\u1278\u12b3\u12ed') || text.includes('saffisaan')) 
      return t('chatbot.responses.emergency');
      
    return t('chatbot.responses.unknown');
  };

  const switchToAI = () => {
    setMode('ai');
    setActivePro(null);
    setMessages([{
      id: 'ai-init',
      text: t('chatbot.initial_msg'),
      sender: 'bot',
      timestamp: new Date(),
    }]);
  };

  const startDMWithFirstPro = () => {
    const event = new CustomEvent('open-dm', { 
      detail: { 
        name: t('professionals.martha'),
        specialty: t('professionals.martha_specialty'),
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/dr--martha-bekele-140497c2-1774800796396.webp"
      } 
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]" id="chatbot">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-20 right-0 w-[90vw] sm:w-[400px] h-[600px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                {mode === 'dm' ? (
                  <div className="flex items-center gap-3">
                    <button onClick={switchToAI} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    {activePro?.image && (
                      <img src={activePro.image} className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" alt={activePro.name} />
                    )}
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Sparkles className="w-6 h-6" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold">
                    {mode === 'ai' ? t('chatbot.name') : activePro?.name}
                  </h3>
                  <p className="text-xs text-emerald-100 flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    {t('chatbot.online')}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {mode === 'dm' && (
                  <a href="tel:952" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                )}
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col max-w-[80%]", msg.sender === 'user' ? "ml-auto items-end" : "items-start")}>
                  {msg.isAction ? (
                    <button 
                      onClick={startDMWithFirstPro}
                      className="mt-2 bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-700 transition-all flex items-center gap-2"
                    >
                      <MessageCircle className="w-3 h-3" />
                      {msg.text}
                    </button>
                  ) : (
                    <div className={cn(
                      "p-3 rounded-2xl text-sm leading-relaxed", 
                      msg.sender === 'user' ? "bg-emerald-600 text-white rounded-tr-none" : 
                      msg.sender === 'bot' ? "bg-white text-slate-800 rounded-tl-none border border-slate-100 shadow-sm" :
                      "bg-white text-slate-800 rounded-tl-none border border-emerald-100 shadow-sm shadow-emerald-50"
                    )}>
                      {msg.text}
                    </div>
                  )}
                  {!msg.isAction && (
                    <span className="text-[10px] text-slate-400 mt-1 px-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 italic text-xs animate-pulse">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-slate-400 rounded-full" />
                    <div className="w-1 h-1 bg-slate-400 rounded-full" />
                    <div className="w-1 h-1 bg-slate-400 rounded-full" />
                  </div>
                  {t('chatbot.typing', { name: mode === 'ai' ? 'AI' : activePro?.name })}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {mode === 'ai' && messages.length === 1 && (
              <div className="px-4 py-2 flex flex-wrap gap-2 bg-slate-50">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => handleSend(s)} className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-full text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-all">
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={mode === 'ai' ? t('chatbot.input_placeholder') : t('chatbot.dm_placeholder', { name: activePro?.name })}
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <button type="submit" disabled={!input.trim() || isTyping} className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center disabled:opacity-50">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative", isOpen ? "bg-slate-900 text-white" : "bg-emerald-600 text-white")}>
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">
            1
          </div>
        )}
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </button>
    </div>
  );
};