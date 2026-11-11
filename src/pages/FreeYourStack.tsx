import React, { useMemo, useState } from 'react';
import {
  CATEGORIES,
  EFFORT_LABEL,
  WHAT_YOULL_MASTER,
  buildStackChecklist,
  type Effort,
} from '@/data/stack';

const actionBtn =
  'bg-[#000066] text-cyan-300 border border-cyan-700 px-2 py-1 text-xs font-pixel hover:bg-[#000099] hover:text-white transition-colors';

const EFFORT_CHIP: Record<Effort, string> = {
  ready: 'text-green-300 border-green-600',
  setup: 'text-yellow-300 border-yellow-600',
  managed: 'text-pink-300 border-pink-500',
};

export default function ResourcesFreeYourStack() {
  const [selected, setSelected] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const chosen = useMemo(() => CATEGORIES.filter((c) => selected.includes(c.id)), [selected]);
  const markdown = useMemo(() => buildStackChecklist(selected), [selected]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const download = () => {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'free-your-stack.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const reset = () => setSelected([]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-pixel text-yellow-300 text-center mb-2">~ Free Your Stack ~</h2>
      <p className="text-center text-gray-400 text-xs max-w-2xl mx-auto">
        Tick the paid software your organisation uses, and get free, open-source alternatives you can
        actually adopt, with a setup checklist you can keep.
      </p>

      <div className="border-2 border-green-500 bg-[#001a00]/60 p-3 text-center">
        <p className="text-green-300 text-xs">
          <span className="font-pixel text-[10px] mr-1">[ PRIVATE ]</span>
          Everything runs in your browser. Your answers never leave your device. No account, no upload.
        </p>
      </div>

      {/* What you'll master */}
      <div className="border-2 border-cyan-600 bg-[#000033] p-3">
        <div className="text-cyan-300 font-pixel text-xs mb-2">What you'll master</div>
        <ul className="space-y-1 text-xs list-none">
          {WHAT_YOULL_MASTER.map((m) => (
            <li key={m}><span className="text-green-400">&gt;</span> <span className="text-gray-200">{m}</span></li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* ---------------- Picker ---------------- */}
        <div className="lg:w-1/2 space-y-2">
          <div className="text-cyan-300 font-pixel text-xs mb-1">What do you use?</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CATEGORIES.map((c) => {
              const on = selected.includes(c.id);
              return (
                <label
                  key={c.id}
                  className={`border-2 p-2 cursor-pointer block transition-colors ${
                    on ? 'border-cyan-500 bg-[#000044]' : 'border-gray-700 bg-black/30 hover:border-cyan-700'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-0.5" checked={on} onChange={() => toggle(c.id)} />
                    <span>
                      <span className={`block text-xs font-bold ${on ? 'text-cyan-300' : 'text-gray-200'}`}>{c.need}</span>
                      <span className="block text-gray-500 text-[10px]">instead of {c.youUse}</span>
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* ---------------- Your stack ---------------- */}
        <div className="lg:w-1/2 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-cyan-300 font-pixel text-xs">Your free stack</div>
            <div className="text-gray-500 text-[10px] font-pixel">{chosen.length} picked</div>
            <div className="flex gap-1.5 ml-auto">
              <button type="button" onClick={copy} className={actionBtn} disabled={!chosen.length}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button type="button" onClick={download} className={actionBtn} disabled={!chosen.length}>Download .md</button>
              {chosen.length > 0 && <button type="button" onClick={reset} className={actionBtn}>Reset</button>}
            </div>
          </div>

          <div className="border-2 border-cyan-500 bg-[#000022] p-3 shadow-[4px_4px_0px_#00FFFF] max-h-[60vh] overflow-y-auto policy-scroll space-y-3">
            {chosen.length === 0 ? (
              <p className="text-gray-500 text-xs italic">Tick the tools you use on the left, and your free stack builds here.</p>
            ) : (
              chosen.map((c) => (
                <div key={c.id}>
                  <div className="text-yellow-300 font-bold text-xs border-b border-gray-700 pb-1 mb-1">
                    {c.need} <span className="text-gray-500 font-normal">instead of {c.youUse}</span>
                  </div>
                  <ul className="space-y-2">
                    {c.picks.map((p) => (
                      <li key={p.name}>
                        <div className="flex items-center gap-2 flex-wrap">
                          <a href={p.url} target="_blank" rel="noreferrer noopener" className="text-cyan-300 hover:underline text-sm font-bold">
                            {p.name}
                          </a>
                          <span className={`text-[9px] font-pixel border px-1 py-0.5 ${EFFORT_CHIP[p.effort]}`}>
                            {EFFORT_LABEL[p.effort]}
                          </span>
                        </div>
                        <p className="text-gray-300 text-xs mt-0.5">{p.why}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>

          <p className="text-gray-500 text-[10px]">
            <span className="text-green-300">Ready to use</span> you can start today.{' '}
            <span className="text-yellow-300">Needs setup</span> takes some technical work.{' '}
            <span className="text-pink-300">We can set this up</span> means we host and run it for you.
          </p>
        </div>
      </div>

      {/* Soft CTA */}
      <div className="border-4 border-double border-pink-400 bg-[#1a0033] p-5 text-center shadow-[4px_4px_0px_#FF66CC]">
        <h3 className="text-lg text-pink-300 font-pixel mb-2">Want a hand switching?</h3>
        <p className="text-gray-300 text-sm mb-3 max-w-xl mx-auto">
          We help organisations move off costly software and set up the free tools that need a bit of
          work, from your own chat and storage to donor tools and analytics. No pressure, just a
          conversation.
        </p>
        <a
          href="https://paqn.network/contact"
          className="inline-block bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-pixel py-3 px-6 hover:from-cyan-500 hover:to-purple-500 transition-all border border-white/20 text-sm"
        >
          BOOK A DISCOVERY CALL
        </a>
      </div>
    </div>
  );
}
