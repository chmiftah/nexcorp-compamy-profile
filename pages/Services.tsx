import React from 'react';

interface Props {
  navigate: (page: any) => void;
}

const Services: React.FC<Props> = ({ navigate }) => {
  return (
    <>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
                Future-Proof Your <span className="text-primary italic">Strategy</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                We provide comprehensive corporate solutions tailored to streamline operations and drive sustainable growth for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => navigate('contact')} className="h-14 px-10 rounded-full bg-primary text-white font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95">
                  <span>Get a Consultation</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
                <button onClick={() => navigate('portfolio')} className="h-14 px-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all font-bold text-slate-900 shadow-sm active:scale-95">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-[600px] lg:max-w-none">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200 group ring-8 ring-white">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000')" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">Holistic Growth Solutions</h3>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">From auditing to digital transformation, our experts guide you through every step of your evolution.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard title="Strategic Consulting" icon="lightbulb" img="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" />
          <ServiceCard title="Financial Auditing" icon="analytics" img="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600" />
          <ServiceCard title="Digital Transformation" icon="terminal" img="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600" />
          <ServiceCard title="HR & Talent" icon="diversity_3" img="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600" />
          <ServiceCard title="M&A Advisory" icon="handshake" img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" />
          <ServiceCard title="Operations Resiliency" icon="hub" img="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600" />
        </div>
      </section>

      {/* Footer */}
    </>
  );
};

const ServiceCard = ({ title, icon, img }: { title: string, icon: string, img: string }) => (
  <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
    <div className="h-56 bg-cover bg-center relative" style={{ backgroundImage: `url('${img}')` }}>
      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all"></div>
      <div className="absolute top-5 left-5 bg-white p-2.5 rounded-xl text-primary shadow-lg ring-1 ring-slate-100">
        <span className="material-symbols-outlined text-[24px]">{icon}</span>
      </div>
    </div>
    <div className="p-8 flex flex-col flex-1">
      <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors text-slate-900 leading-tight">{title}</h4>
      <p className="text-slate-500 font-medium mb-6 text-base leading-relaxed line-clamp-2">Tailored enterprise strategies designed to optimize efficiency and drive performance.</p>
      <div className="mt-auto">
        <button className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-primary transition-colors gap-2 uppercase tracking-widest">
          Learn More <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>
    </div>
  </div>
);

export default Services;