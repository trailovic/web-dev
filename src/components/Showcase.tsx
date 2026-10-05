import { useId, useState } from 'react';
import { Check, Globe2, Mail, Minus, Plus } from 'lucide-react';
import { localeConfig, useI18n, type Locale, type TranslationKey } from '../i18n';

import { translate } from '../i18n/translate';

const controlClass = 'rounded-xl border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none focus-visible:ring-2 focus-visible:ring-violet-400';
const stepperClass = 'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-violet-400 disabled:cursor-not-allowed disabled:opacity-30';

export default function Showcase() {
  const { locale, t } = useI18n();
  const [demoLocale, setDemoLocale] = useState<Locale>(locale);
  const [name, setName] = useState('Alex');
  const [count, setCount] = useState(3);
  const [today] = useState(() => new Date());
  const id = useId();
  const demoT = (key: TranslationKey, variables?: Record<string, string | number>) =>
    translate(demoLocale, key, variables);
  const plural = new Intl.PluralRules(demoLocale).select(count);
  const regionLocale = demoLocale === 'en' ? 'en-GB' : 'nb-NO';
  const date = new Intl.DateTimeFormat(regionLocale, { dateStyle: 'long' }).format(today);

  return (
    <section id="showcase" aria-labelledby={`${id}-heading`} className="border-b border-white/10 bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-violet-400">{t('showcase.eyebrow')}</p>
        <h2 id={`${id}-heading`} className="text-4xl font-black text-white">{t('showcase.title')}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{t('showcase.description')}</p>

        <div className="mt-10 grid overflow-hidden rounded-3xl border border-white/10 bg-white/3 lg:grid-cols-2">
          <div className="p-6 sm:p-8 lg:p-10">
            <Globe2 aria-hidden="true" className="mb-5 text-violet-400" size={30} />
            <h3 className="text-2xl font-bold text-white">{t('showcase.demoTitle')}</h3>
            <p className="mt-3 leading-7 text-slate-300">{t('showcase.instructions')}</p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="flex min-w-0 flex-col gap-2">
                <label htmlFor={`${id}-name`} className="text-sm font-medium text-slate-300">{t('showcase.name')}</label>
                <input id={`${id}-name`} value={name} maxLength={40} autoComplete="off" onChange={(event) => setName(event.target.value)} className={controlClass} />
              </div>
              <div className="flex min-w-0 flex-col gap-2">
                <label htmlFor={`${id}-language`} className="text-sm font-medium text-slate-300">{t('showcase.language')}</label>
                <select id={`${id}-language`} value={demoLocale} onChange={(event) => setDemoLocale(event.target.value as Locale)} className={`${controlClass} [color-scheme:dark]`}>
                  {Object.entries(localeConfig).map(([value, config]) => (
                    <option key={value} value={value} lang={value}>{config.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <span id={`${id}-count`} className="text-sm font-medium text-slate-300">{t('showcase.count')}</span>
              <div role="group" aria-labelledby={`${id}-count`} className="flex items-center rounded-xl border border-white/15 bg-slate-900 p-1">
                <button type="button" aria-label={t('showcase.decrease')} disabled={count === 0} onClick={() => setCount((value) => Math.max(0, value - 1))} className={stepperClass}><Minus size={16} aria-hidden="true" /></button>
                <output className="w-10 text-center font-mono text-white">{count}</output>
                <button type="button" aria-label={t('showcase.increase')} disabled={count === 10} onClick={() => setCount((value) => Math.min(10, value + 1))} className={stepperClass}><Plus size={16} aria-hidden="true" /></button>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">{t('showcase.note')}</p>
          </div>

          <div className="flex min-w-0 flex-col justify-center border-t border-white/10 bg-gradient-to-br from-violet-500/10 to-slate-900 p-6 sm:p-8 lg:border-t-0 lg:border-l lg:p-10">
            <p className="mb-4 text-xs font-semibold tracking-widest text-violet-300 uppercase">{t('showcase.preview')}</p>
            <div lang={demoLocale} className="rounded-2xl border border-white/15 bg-slate-950 p-6 shadow-xl sm:p-8">
              <div aria-live="polite" aria-atomic="true">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <span className="rounded-xl bg-violet-500/15 p-3 text-violet-300"><Mail size={22} aria-hidden="true" /></span>
                  <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-400">{regionLocale}</span>
                </div>
                <h4 className="text-2xl font-bold break-words text-white">{demoT('showcase.welcome', { name: name.trim() || demoT('showcase.fallbackName') })}</h4>
                <p className="mt-3 text-slate-300">{demoT(plural === 'one' ? 'showcase.messages.one' : 'showcase.messages.other', { count })}</p>
                <p className="mt-6 text-sm text-slate-400">{demoT('showcase.date')} · {date}</p>
              </div>
              <button type="button" disabled={count === 0} onClick={() => setCount(0)} className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400 disabled:cursor-default disabled:bg-slate-800 disabled:text-slate-400">
                {count === 0 && <Check size={18} aria-hidden="true" />}
                {demoT(count === 0 ? 'showcase.empty' : 'showcase.clear')}
              </button>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">{t('showcase.detail')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
