'use client';

import { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ICON_PATHS: Record<string, React.ReactElement> = {
  home: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>,
  mail: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>,
  menu: <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>,
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

interface MenuItem {
  path: string;
  label: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { path: '/', label: 'FB创号助手', icon: 'home' },
  { path: '/mail', label: '临时邮箱大全', icon: 'mail' },
];

export const NavigationMenu = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  const handleToggle = () => {
    haptic(20);
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    haptic(20);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="fixed top-4 right-4 z-50 bg-black/40 backdrop-blur-xl border border-white/20 p-2 rounded-full text-white shadow-lg active:scale-95 transition-all touch-manipulation"
        aria-label="菜单"
      >
        <Icon name={isOpen ? 'close' : 'menu'} className="w-5 h-5" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleToggle}
          />

          <div
            className="fixed top-0 left-0 bottom-0 z-50 w-[280px] bg-black/40 backdrop-blur-xl border-r border-white/20 shadow-2xl"
            style={{
              animation: 'slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform'
            }}
          >
            <div className="p-6 space-y-2">
              <h2 className="text-[17px] font-semibold text-white/60 mb-6 tracking-tight">
                导航菜单
              </h2>

              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 active:scale-[0.98] touch-manipulation ${
                      isActive
                        ? 'bg-white/10 text-[#409CFF] font-semibold shadow-lg border border-white/10'
                        : 'text-white/80 active:bg-white/10'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#007AFF]/20' : 'bg-white/10'}`}>
                      <Icon name={item.icon} className={`w-4 h-4 ${isActive ? 'text-[#409CFF]' : 'text-white/50'}`} />
                    </div>
                    <span className="text-[16px] tracking-tight drop-shadow-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}

      <style jsx global>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
});

NavigationMenu.displayName = 'NavigationMenu';
