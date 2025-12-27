import React from 'react';

interface Props {
  navigate: (page: any) => void;
}

const News: React.FC<Props> = ({ navigate }) => {
  return (
    <>

      {/* Hero */}
      <section className="relative w-full py-20 lg:py-32 px-4 bg-slate-50/50 overflow-hidden">
        <div className="absolute -top-24 -right-24 size-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-100 w-fit shadow-sm">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-[10px] font-black uppercase tracking-widest">Global Insights</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-slate-900">
              Ideas that fuel <br /><span className="text-primary italic">Innovation</span>.
            </h1>
            <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
              Stay ahead with curated industry analysis and thought leadership from the world's leading strategic minds.
            </p>
            <div className="flex w-full max-w-md items-center bg-white border border-slate-200 rounded-full p-2 shadow-xl shadow-slate-900/5 focus-within:ring-4 focus-within:ring-primary/5 transition-all">
              <span className="material-symbols-outlined text-slate-400 ml-3">search</span>
              <input className="bg-transparent border-none text-base w-full focus:ring-0 text-slate-900 placeholder-slate-400 mx-2" placeholder="Search insights..." type="text" />
              <button className="size-11 flex items-center justify-center rounded-full bg-slate-900 hover:bg-primary transition-all text-white shadow-lg">
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24">
        <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-0 rounded-[3rem] overflow-hidden bg-white border border-slate-100 shadow-2xl transition-all duration-500 hover:shadow-primary/5 ring-1 ring-slate-100">
          <div className="md:col-span-7 h-[400px] md:h-auto overflow-hidden">
            <img alt="Featured" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" />
          </div>
          <div className="md:col-span-5 p-10 md:p-14 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-widest">Technology</span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">schedule</span> 8 Min
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 group-hover:text-primary transition-colors leading-tight">The Future of AI in Enterprise: 2024 Outlook</h3>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed text-lg">Exploring how generative intelligence is reshaping how we approach complex business problems and defining the next decade.</p>
            <button className="inline-flex items-center text-sm font-black text-slate-900 hover:text-primary transition-all gap-2 uppercase tracking-widest group/btn">
              Read Article <span className="material-symbols-outlined text-[20px] transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <NewsCard title="Global Expansion: New Strategic Hub in Singapore" category="Corporate" date="Oct 24, 2023" author="NexCorp PR" img="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" />
          <NewsCard title="NexGrid: The Next Generation Cloud Standard" category="Innovation" date="Oct 20, 2023" author="Tech Team" img="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" />
          <NewsCard title="Sustainability: 2024 Impact Report Published" category="ESG" date="Oct 15, 2023" author="Growth Hub" img="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600" />
        </div>
      </section>

    </>
  );
};

const NewsCard = ({ title, category, date, author, img }: any) => (
  <article className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 h-full">
    <div className="relative h-64 overflow-hidden">
      <img alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" src={img} />
      <div className="absolute top-5 left-5">
        <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-lg">{category}</span>
      </div>
    </div>
    <div className="flex flex-col flex-grow p-8">
      <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 gap-3">
        <span>{date}</span>
        <span className="size-1 rounded-full bg-slate-200"></span>
        <span className="text-slate-900">{author}</span>
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-6 line-clamp-2 group-hover:text-primary transition-colors leading-tight">{title}</h3>
      <div className="mt-auto">
        <button className="inline-flex items-center text-xs font-black text-slate-900 hover:text-primary gap-2 uppercase tracking-widest group/more">
          Read Story <span className="material-symbols-outlined text-[18px] transition-transform group-hover/more:translate-x-1">arrow_forward</span>
        </button>
      </div>
    </div>
  </article>
);

export default News;