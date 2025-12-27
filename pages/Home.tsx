import React from 'react';

interface Props {
  navigate: (page: any) => void;
}

const Home: React.FC<Props> = ({ navigate }) => {
  return (
    <>


      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                Future of Enterprise
              </div>
              <h1 className="text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
                Strategic solutions for <span className="text-primary italic">sustainable growth</span>.
              </h1>
              <p className="max-w-xl text-lg text-slate-500 leading-relaxed">
                We help forward-thinking companies navigate complex digital landscapes, optimize operations, and unlock new revenue streams with precision.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={() => navigate('contact')} className="h-12 rounded-full bg-primary px-8 text-base font-bold text-white hover:shadow-lg transition-all active:scale-95">
                  Get Consultation
                </button>
                <button onClick={() => navigate('portfolio')} className="h-12 rounded-full border border-slate-200 bg-white px-8 text-base font-bold text-slate-900 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                  View Our Work
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm font-medium text-slate-500">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="size-9 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center shadow-sm" style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=${i + 10}')` }}></div>
                  ))}
                </div>
                <p>Trusted by <span className="text-slate-900 font-bold">500+</span> global partners</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl blur-3xl -z-10"></div>
              <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
                <div className="aspect-[4/3] w-full bg-cover bg-center grayscale-[0.2] contrast-[1.1]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000')" }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-12">
        <div className="container mx-auto px-4">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Industry Leaders who trust us</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {['change_history', 'pentagon', 'circle', 'square', 'diamond'].map((icon, i) => (
              <div key={i} className="flex items-center gap-2 text-xl font-black text-slate-900"><span className="material-symbols-outlined text-3xl text-primary">{icon}</span> Partner</div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="overflow-hidden rounded-2xl aspect-[3/4] shadow-lg">
                    <img alt="Office meeting" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" />
                  </div>
                  <div className="overflow-hidden rounded-2xl aspect-square bg-primary-light p-6 flex flex-col justify-between shadow-sm border border-primary/5">
                    <span className="material-symbols-outlined text-5xl text-primary">rocket_launch</span>
                    <p className="text-xl font-bold leading-tight text-slate-900">Accelerating growth for 10+ years</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="overflow-hidden rounded-2xl aspect-square bg-slate-900 p-6 flex flex-col justify-between shadow-xl">
                    <span className="material-symbols-outlined text-5xl text-primary">diversity_3</span>
                    <p className="text-xl font-bold text-white leading-tight">Expert teams across 3 continents</p>
                  </div>
                  <div className="overflow-hidden rounded-2xl aspect-[3/4] shadow-lg">
                    <img alt="Professional working" className="h-full w-full object-cover" src="https://plus.unsplash.com/premium_photo-1669904021308-567d085a0ee7?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-primary text-sm font-black uppercase tracking-[0.15em] mb-3">Our Core Philosophy</h2>
              <h3 className="mb-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-slate-900 leading-tight">Architects of Modern High-Performance Business</h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>At NexCorp, we believe that technology is the greatest enabler of human potential. Founded with a vision to simplify complexity, we bridge the gap between ambitious enterprise needs and intuitive digital solutions.</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
                <div>
                  <p className="text-4xl font-black text-slate-900 tracking-tight">98%</p>
                  <p className="text-sm font-semibold text-slate-500 mt-1 uppercase">Client Retention</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900 tracking-tight">$2B+</p>
                  <p className="text-sm font-semibold text-slate-500 mt-1 uppercase">Value Created</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[3.5rem] bg-slate-900 px-6 py-16 text-center shadow-2xl md:px-12 md:py-24">
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">Ready to elevate your business?</h2>
              <p className="mb-10 text-lg font-medium text-slate-300">Join the industry leaders who are redefining success with NexCorp’s strategic edge.</p>
              <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
                <button onClick={() => navigate('contact')} className="h-14 min-w-[180px] rounded-full bg-primary px-8 text-base font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">Get Started Now</button>
                <button onClick={() => navigate('contact')} className="h-14 min-w-[180px] rounded-full border border-slate-700 bg-white/5 px-8 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-slate-500">Contact Sales</button>
              </div>
            </div>
            <div className="absolute -left-20 -top-20 size-80 rounded-full bg-primary/20 blur-[100px]"></div>
            <div className="absolute -bottom-20 -right-20 size-80 rounded-full bg-blue-500/10 blur-[100px]"></div>
          </div>
        </div>
      </section>


    </>
  );
};



export default Home;