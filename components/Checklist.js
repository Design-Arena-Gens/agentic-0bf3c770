"use client";
import { useEffect, useMemo, useState } from 'react';

export default function Checklist({ slug, items }) {
  const storageKey = `checklist:${slug}`;
  const [done, setDone] = useState({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setDone(JSON.parse(raw));
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(done)); } catch {}
  }, [done, storageKey]);

  const progress = useMemo(() => {
    const total = items.length || 1;
    const completed = items.filter(it => done[it.id]).length;
    return { total, completed, pct: Math.round((completed/total)*100) };
  }, [items, done]);

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold">????? ???????</div>
        <div className="text-sm text-slate-400">{progress.completed}/{progress.total} ? {progress.pct}%</div>
      </div>
      <div className="space-y-2">
        {items.map((it) => (
          <label key={it.id} className="flex items-start gap-3 bg-slate-800/50 rounded p-3 cursor-pointer">
            <input
              type="checkbox"
              checked={!!done[it.id]}
              onChange={(e) => setDone((d) => ({ ...d, [it.id]: e.target.checked }))}
              className="mt-1 h-4 w-4 accent-primary-600"
            />
            <span>
              <span className="font-medium">{it.title}</span>
              {it.note && (<div className="text-sm text-slate-400">{it.note}</div>)}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
