import React from 'react';

interface Props {
  navigate: (page: any) => void;
}

const Portfolio: React.FC<Props> = ({ navigate }) => {
  return (
    <>

      {/* Header */}
      <section className="relative pt-16 pb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-4 py-1.5 shadow-sm">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">Portfolio 2024</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-slate-900">
              Designing the <span className="text-primary italic">Digital Frontier</span>.
            </h2>
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
              We partner with global brands to create impactful digital experiences that drive transformation and measurable growth.
            </p>
          </div>
          {/* Filters */}
          <div className="mt-16 flex items-center justify-between border-b border-slate-100 pb-6">
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              <button className="flex h-11 shrink-0 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-bold text-white shadow-lg active:scale-95 transition-all">
                All Work
              </button>
              {['FinTech', 'Health', 'E-Com', 'SaaS'].map(filter => (
                <button key={filter} className="flex h-11 shrink-0 items-center justify-center rounded-full bg-slate-100 px-8 hover:bg-slate-200 transition-all text-sm font-bold text-slate-600 active:scale-95">
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-6 lg:px-8 pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="group relative w-full overflow-hidden rounded-[3rem] bg-slate-100 shadow-2xl transition-all hover:shadow-slate-200 ring-1 ring-slate-100">
            <div className="aspect-[21/9] w-full relative">
              <img alt="Featured" className="h-full w-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-md px-4 py-1.5 text-primary w-fit border border-primary/20">
                  <span className="material-symbols-outlined !text-sm">star</span>
                  <span className="text-xs font-black uppercase tracking-widest">Featured Case Study</span>
                </div>
                <div className="max-w-3xl space-y-6">
                  <h3 className="text-3xl md:text-5xl font-black leading-tight text-white">FinFlow: Revolutionizing Global Payments</h3>
                  <p className="text-lg text-slate-200 max-w-2xl leading-relaxed font-medium">
                    A complete reimagining of the cross-border payment experience for enterprise clients.
                  </p>
                  <button className="flex h-14 items-center gap-3 rounded-full bg-primary px-10 text-base font-bold text-white transition-all hover:bg-white hover:text-slate-900 hover:scale-105 shadow-xl shadow-primary/20">
                    Explore Case Study <span className="material-symbols-outlined !text-xl">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard title="EcoStream App" category="Mobile" img="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800" tags={['Native', 'IoT']} />
            <ProjectCard title="Vortex CRM" category="SaaS" img="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" tags={['Cloud', 'B2B']} />
            <ProjectCard title="Nebula Platform" category="Infrastructure" img="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" tags={['DevOps', 'Scale']} />
          </div>
        </div>
      </section>

    </>
  );
};

const ProjectCard = ({ title, category, img, tags }: { title: string, category: string, img: string, tags: string[] }) => (
  <div className="group flex flex-col gap-6">
    <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-100 ring-1 ring-slate-100">
      <img alt={title} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" src={img} />
      <div className="absolute top-6 right-6 flex items-center justify-center size-12 rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-xl">
        <span className="material-symbols-outlined text-slate-900 text-[24px]">arrow_outward</span>
      </div>
    </div>
    <div className="px-2">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">{title}</h4>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{category}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="rounded-full bg-slate-50 border border-slate-100 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;