import sections from '../../../content/sections';
import Sidebar from '../../../components/Sidebar';
import SectionContent from '../../../components/SectionContent';

export default function SectionPage({ params }) {
  const { slug } = params;
  const data = sections[slug];
  if (!data) {
    return (
      <div className="card p-6">
        <h1 className="text-2xl font-bold">??? ?????</h1>
        <p className="text-slate-300">????? ??????? ??? ?????.</p>
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-[280px,1fr] gap-6">
      <Sidebar current={slug} />
      <SectionContent slug={slug} data={data} />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(sections).map((s) => ({ slug: s }));
}
