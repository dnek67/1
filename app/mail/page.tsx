'use client';

import { useState, useMemo, memo, useCallback } from 'react';
import { tempMailSites, categories, TempMailSite } from '@/lib/mailData';

const ICON_PATHS: Record<string, React.ReactElement> = {
  search: <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>,
  open: <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>,
  close: <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
};

const Icon = memo(({ name, className = "w-6 h-6" }: { name: string; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">{ICON_PATHS[name]}</svg>
));
Icon.displayName = 'Icon';

const haptic = (duration: number = 15) => {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    navigator.vibrate(duration);
  }
};

const MailCard = memo(({ site }: { site: TempMailSite }) => {
  const handleClick = useCallback(() => {
    haptic(30);
    window.open(site.url, '_blank', 'noopener,noreferrer');
  }, [site.url]);

  return (
    <div
      onClick={handleClick}
      className="bg-black/30 rounded-[16px] p-4 border border-white/20 shadow-lg cursor-pointer transition-all duration-200 active:scale-[0.98] hover:bg-black/40 touch-manipulation"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-[17px] font-semibold text-white tracking-tight drop-shadow-md">
          {site.name}
        </h3>
        <Icon name="open" className="w-4 h-4 text-white/60 shrink-0 ml-2" />
      </div>

      <p className="text-[14px] text-white/70 mb-3 leading-relaxed drop-shadow-sm">
        {site.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {site.features.map((feature, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-white/10 rounded-lg text-[12px] text-white/80 font-medium backdrop-blur-sm"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
});
MailCard.displayName = 'MailCard';

export default function MailPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSites = useMemo(() => {
    let filtered = tempMailSites;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(site => site.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(site =>
        site.name.toLowerCase().includes(query) ||
        site.description.toLowerCase().includes(query) ||
        site.features.some(f => f.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleCategoryClick = useCallback((categoryId: string) => {
    haptic(20);
    setSelectedCategory(categoryId);
  }, []);

  const handleClearSearch = useCallback(() => {
    haptic(20);
    setSearchQuery('');
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-white pb-10 selection:bg-blue-400/30 overflow-x-hidden">
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 h-[52px] z-40 flex items-center justify-between px-4 pt-2">
          <h1 className="text-[17px] font-semibold text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            脸书小助手
          </h1>
        </header>

        <main className="max-w-[420px] mx-auto px-5 pt-20 pb-10 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight drop-shadow-lg">
              临时邮箱大全
            </h2>
            <p className="text-white/70 text-sm drop-shadow-md">
              收录 {tempMailSites.length} 个临时邮箱网站
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="search" className="w-4 h-4 text-white/40" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索临时邮箱..."
              className="w-full pl-9 pr-10 py-3 bg-black/30 border border-white/20 rounded-[14px] text-[16px] text-white placeholder-white/30 focus:ring-2 focus:ring-white/20 focus:bg-black/40 transition-colors caret-[#007AFF] outline-none shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center touch-manipulation active:scale-90 transition-transform"
              >
                <div className="bg-white/20 rounded-full p-1">
                  <Icon name="close" className="w-3 h-3 text-white" />
                </div>
              </button>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 active:scale-95 touch-manipulation ${
                  selectedCategory === category.id
                    ? 'bg-[#007AFF]/90 text-white shadow-lg border border-white/20'
                    : 'bg-black/30 text-white/80 border border-white/20 active:bg-black/40'
                }`}
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {filteredSites.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-white/50 text-sm">未找到匹配的临时邮箱</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredSites.map((site) => (
                <MailCard key={site.id} site={site} />
              ))}
            </div>
          )}

          <footer className="pt-4 pb-8 text-center">
            <p className="text-[12px] text-white/80 font-medium tracking-tight drop-shadow-md">
              共收录 {tempMailSites.length} 个临时邮箱网站
            </p>
          </footer>
        </main>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
