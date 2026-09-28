import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Languages } from 'lucide-react';
import { localeConfig, useI18n, type Locale } from '../i18n';

export default function LanguageSwitcher() {
  const { locale, locales, setLocale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() => locales.indexOf(locale));
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    setActiveIndex(locales.indexOf(locale));
  }, [locale, locales]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      optionRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex, isOpen]);

  if (locales.length < 2) return null;

  const selectLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setIsOpen(false);
  };

  const moveActive = (direction: 1 | -1) => {
    setActiveIndex((current) => {
      const next = (current + direction + locales.length) % locales.length;
      return next;
    });
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={t('language.label')}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            setIsOpen(true);
            moveActive(event.key === 'ArrowDown' ? 1 : -1);
          }
        }}
        className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 pl-3 pr-3 text-sm font-medium text-slate-200 shadow-sm outline-none transition duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:border-violet-500/70 focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-violet-500/20"
      >
        <Languages
          size={17}
          aria-hidden="true"
          className="text-violet-300 transition-colors group-hover:text-violet-200"
        />
        <span>{localeConfig[locale].label}</span>
        <ChevronDown
          size={15}
          aria-hidden="true"
          className={`ml-1 text-slate-400 transition duration-200 group-hover:text-slate-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`absolute right-0 top-full z-50 mt-2 min-w-full origin-top-right overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-150 ${isOpen ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible -translate-y-1 scale-95 opacity-0'}`}
      >
        <div role="listbox" aria-label={t('language.label')}>
          {locales.map((item, index) => {
            const selected = item === locale;

            return (
              <button
                key={item}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                type="button"
                role="option"
                aria-selected={selected}
                tabIndex={isOpen && index === activeIndex ? 0 : -1}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectLocale(item)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                    event.preventDefault();
                    moveActive(event.key === 'ArrowDown' ? 1 : -1);
                  }

                  if (event.key === 'Escape') {
                    event.preventDefault();
                    setIsOpen(false);
                    containerRef.current?.querySelector<HTMLButtonElement>('[aria-haspopup="listbox"]')?.focus();
                  }

                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    selectLocale(item);
                  }
                }}
                className={`flex w-full items-center justify-between gap-6 rounded-lg px-3 py-2.5 text-left text-sm font-medium outline-none transition ${selected ? 'bg-violet-500/15 text-violet-200' : 'text-slate-300 hover:bg-white/7 hover:text-white'} ${index === activeIndex ? 'ring-1 ring-inset ring-white/10' : ''}`}
              >
                <span>{localeConfig[item].label}</span>
                <Check
                  size={15}
                  aria-hidden="true"
                  className={selected ? 'text-violet-300 opacity-100' : 'opacity-0'}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
