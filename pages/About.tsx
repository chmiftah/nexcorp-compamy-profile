import React from 'react';

interface Props {
  navigate: (page: any) => void;
}

const About: React.FC<Props> = ({ navigate }) => {
  return (
    <>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-slate-50/50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.03]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-8 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Establishing Trust Since 2010
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1] text-slate-900">
            Driven by Innovation,<br />Rooted in <span className="text-primary italic">Integrity</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            We are a global consultancy firm dedicated to redefining industry standards. Our multidisciplinary team bridges the gap between complex challenges and sustainable solutions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { num: '14+', label: 'Years Experience' },
              { num: '500+', label: 'Projects Delivered' },
              { num: '50+', label: 'Global Partners' },
              { num: '98%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-5xl font-black text-slate-900 tracking-tighter">{stat.num}</span>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 md:text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-black tracking-tight mb-4 text-slate-900 uppercase tracking-tight">Our Journey</h2>
            <p className="text-slate-500 font-medium text-lg">Explore the milestones that have defined our evolution into an industry leader.</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-1/2"></div>
            <div className="space-y-16">
              <TimelineItem year="2010" title="Founding" desc="Veridian Corp was established with a vision to digitize traditional manufacturing processes." align="right" />
              <TimelineItem year="2015" title="Global Expansion" desc="Opened our first international office in London, marking our entry into the European market." align="left" />
              <TimelineItem year="2020" title="Sustainability Initiative" desc="Launched our 'Green Future' program, committing to carbon neutrality by 2030." align="right" />
              <TimelineItem year="2023" title="Tech Innovation Award" desc="Recognized as the 'Most Innovative Tech Company' at the Global Summit." align="left" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-4 text-slate-900">Meet the Leadership</h2>
            <p className="text-slate-500 font-medium text-lg">A diverse team of visionaries leading us towards a brighter tomorrow.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <LeadershipCard name="James Sterling" role="Chief Executive Officer" img="https://i.pravatar.cc/600?img=11" />
            <LeadershipCard name="Sarah Jenkins" role="Chief Technology Officer" img="https://i.pravatar.cc/600?img=32" />
            <LeadershipCard name="Robert Chen" role="Chief Operating Officer" img="https://i.pravatar.cc/600?img=12" />
          </div>
        </div>
      </section>

      {/* Footer */}
    </>
  );
};

const TimelineItem = ({ year, title, desc, align }: { year: string, title: string, desc: string, align: 'left' | 'right' }) => (
  <div className={`relative flex flex-col md:flex-row ${align === 'left' ? 'md:flex-row-reverse' : ''} items-start md:items-center justify-between group`}>
    <div className={`md:w-[45%] mb-4 md:mb-0 ${align === 'right' ? 'md:text-right pr-8' : 'md:text-left pl-8'} pl-12 md:pl-0`}>
      <h3 className="text-3xl font-black text-primary mb-1">{year}</h3>
      <h4 className="text-xl font-bold mb-3 text-slate-900">{title}</h4>
      <p className="text-slate-500 text-base leading-relaxed font-medium">{desc}</p>
    </div>
    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-slate-200 group-hover:border-primary group-hover:scale-125 transition-all duration-300 z-10 shadow-sm"></div>
    <div className="md:w-[45%]"></div>
  </div>
);

const LeadershipCard = ({ name, role, img }: { name: string, role: string, img: string }) => (
  <div className="group flex flex-col gap-6">
    <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl">
      <img alt={name} className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" src={img} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
        <div className="flex gap-4 text-white">
          <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">link</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">mail</span>
        </div>
      </div>
    </div>
    <div className="px-2">
      <h3 className="text-2xl font-black text-slate-900">{name}</h3>
      <p className="text-sm font-bold text-primary uppercase tracking-widest mt-1">{role}</p>
    </div>
  </div>
);

export default About;