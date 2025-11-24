import Checklist from './Checklist';

export default function SectionContent({ slug, data }) {
  return (
    <article className="space-y-6">
      <header className="card p-6">
        <h1 className="text-2xl font-extrabold mb-2">{data.title}</h1>
        <p className="text-slate-300">{data.summary}</p>
      </header>

      {data.blocks?.map((block, idx) => (
        <section key={idx} className="card p-6">
          <h2 className="text-lg font-bold mb-3">{block.heading}</h2>
          {block.type === 'list' && (
            <ul className="space-y-2 list-disc pr-6 text-slate-300">
              {block.items.map((i, k) => (
                <li key={k}>{i}</li>
              ))}
            </ul>
          )}
          {block.type === 'steps' && (
            <ol className="space-y-2 list-decimal pr-6 text-slate-300">
              {block.items.map((i, k) => (
                <li key={k}>{i}</li>
              ))}
            </ol>
          )}
          {block.type === 'resources' && (
            <div className="grid md:grid-cols-2 gap-3">
              {block.items.map((r, k) => (
                <a key={k} href={r.url} target="_blank" className="p-4 rounded bg-slate-800/60 hover:bg-slate-800 border border-slate-700">
                  <div className="font-medium">{r.title}</div>
                  <div className="text-sm text-slate-400">{r.note}</div>
                </a>
              ))}
            </div>
          )}
          {block.type === 'text' && (
            <p className="text-slate-300 leading-8">{block.content}</p>
          )}
        </section>
      ))}

      {data.checklist && <Checklist slug={slug} items={data.checklist} />}
    </article>
  );
}
