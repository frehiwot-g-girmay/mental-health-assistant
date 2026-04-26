import React, { useState } from 'react';
import { ArrowRight, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export const Blog = () => {
  const { t } = useTranslation();
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const posts = [
    {
      title: t('blog.post1.title'),
      excerpt: t('blog.post1.excerpt'),
      fullContent: t('blog.post1.full_content'),
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/community-support-blog-thumbnail-64c7e12a-1772209580559.webp",
      date: t('blog.post1.date'),
      category: t('blog.post1.category')
    },
    {
      title: t('blog.post2.title'),
      excerpt: t('blog.post2.excerpt'),
      fullContent: t('blog.post2.full_content'),
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/mindfulness-blog-thumbnail-60250fab-1772209581049.webp",
      date: t('blog.post2.date'),
      category: t('blog.post2.category')
    },
    {
      title: t('blog.post3.title'),
      excerpt: t('blog.post3.excerpt'),
      fullContent: t('blog.post3.full_content'),
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/13baa536-528c-4710-9929-0a84c9712f34/community-support-blog-thumbnail-64c7e12a-1772209580559.webp",
      date: t('blog.post3.date'),
      category: t('blog.post3.category')
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4">
              {t('blog.badge')}
            </h2>
            <h3 className="text-4xl font-bold text-slate-900">
              {t('blog.title')}
            </h3>
          </div>
          <button className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all">
            {t('blog.view_all')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => {
          const isExpanded = expandedIndices.includes(idx);
          return (
            <article 
              key={idx} 
              className={`group bg-white rounded-[2rem] border border-slate-100 p-4 transition-all duration-300 hover:shadow-xl hover:border-emerald-100 ${isExpanded ? 'lg:col-span-1 h-fit' : ''}`}
            >
              <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="px-2">
                <p className="text-slate-400 text-sm font-medium mb-2">{post.date}</p>
                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h4>
                
                <AnimatePresence mode="wait">
                  {!isExpanded ? (
                    <motion.p 
                      key="excerpt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-slate-600 leading-relaxed mb-4"
                    >
                      {post.excerpt}
                    </motion.p>
                  ) : (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 leading-relaxed mb-4 font-medium italic">
                        {post.excerpt}
                      </p>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {post.fullContent}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  onClick={() => toggleExpand(idx)}
                  className="flex items-center gap-2 text-emerald-600 font-bold text-sm hover:gap-3 transition-all"
                >
                  {isExpanded ? (
                    <>
                      {t('blog.read_less')}
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      {t('blog.read_more')}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};