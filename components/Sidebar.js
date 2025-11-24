import Link from 'next/link';
import sections from '../content/sections';

export default function Sidebar({ current }) {
  const entries = Object.entries(sections);
  return (
    <aside className="card p-4 sticky top-6 max-h-[80vh] overflow-auto">
      <div className="text-sm text-slate-400 mb-2">???????</div>
      <nav className="space-y-1">
        {entries.map(([slug, s]) => (
          <Link key={slug} href={`/sections/${slug}`} className={`block px-3 py-2 rounded hover:bg-slate-800 ${current===slug?'bg-slate-800 text-white':''}`}>
            {s.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
