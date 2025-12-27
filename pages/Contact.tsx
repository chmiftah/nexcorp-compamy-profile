import React from 'react';

interface Props {
   navigate: (page: any) => void;
}

const Contact: React.FC<Props> = ({ navigate }) => {
   return (

      <div className="flex-1 w-full flex flex-col items-center">
         <section className="w-full max-w-7xl px-6 lg:px-12 pt-20 pb-12">
            <div className="flex flex-col gap-6 max-w-3xl">
               <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.2em]">
                  <span className="w-6 h-0.5 bg-primary"></span>
                  <span>Contact Our Team</span>
               </div>
               <h1 className="text-slate-900 text-5xl md:text-7xl font-black leading-tight tracking-tight">Let's build something <span className="text-primary italic">together</span>.</h1>
               <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl">
                  We'd love to hear from you. Our consultants are ready to discuss your next big milestone and how we can support your journey.
               </p>
            </div>
         </section>

         <section className="w-full max-w-7xl px-6 lg:px-12 pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 pt-12">
               {/* Form */}
               <div className="lg:col-span-7">
                  <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100">
                     <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <label className="flex flex-col gap-2.5">
                              <span className="text-slate-900 text-xs font-black uppercase tracking-widest ml-1">Full Name</span>
                              <input className="w-full rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary text-slate-900 placeholder-slate-400 h-14 px-6 transition-all focus:ring-4 focus:ring-primary/5 outline-none" placeholder="John Doe" type="text" />
                           </label>
                           <label className="flex flex-col gap-2.5">
                              <span className="text-slate-900 text-xs font-black uppercase tracking-widest ml-1">Business Email</span>
                              <input className="w-full rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary text-slate-900 placeholder-slate-400 h-14 px-6 transition-all focus:ring-4 focus:ring-primary/5 outline-none" placeholder="john@company.com" type="email" />
                           </label>
                        </div>
                        <label className="flex flex-col gap-2.5">
                           <span className="text-slate-900 text-xs font-black uppercase tracking-widest ml-1">Project Subject</span>
                           <input className="w-full rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary text-slate-900 placeholder-slate-400 h-14 px-6 transition-all focus:ring-4 focus:ring-primary/5 outline-none" placeholder="Strategy Consulting Inquiry" type="text" />
                        </label>
                        <label className="flex flex-col gap-2.5">
                           <span className="text-slate-900 text-xs font-black uppercase tracking-widest ml-1">Message Detail</span>
                           <textarea className="w-full rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary text-slate-900 placeholder-slate-400 min-h-[200px] p-6 resize-none transition-all focus:ring-4 focus:ring-primary/5 outline-none" placeholder="Tell us about your project goals and timeline..."></textarea>
                        </label>
                        <div className="pt-4">
                           <button className="group flex w-full md:w-auto items-center justify-center gap-3 rounded-full bg-slate-900 h-16 px-10 text-white font-black text-base transition-all hover:bg-primary hover:shadow-xl active:scale-95 uppercase tracking-widest" type="submit">
                              <span>Send Message</span>
                              <span className="material-symbols-outlined text-[24px] transition-transform group-hover:translate-x-1">send</span>
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
               {/* Info */}
               <div className="lg:col-span-5 flex flex-col gap-10">
                  <div className="flex flex-col gap-6">
                     <ContactInfoCard icon="mail" title="Email" desc="Support & Sales" action="hello@novacorp.com" />
                     <ContactInfoCard icon="call" title="Phone" desc="Mon-Fri, 9am - 6pm" action="+1 (555) 000-1234" />
                     <ContactInfoCard icon="location_on" title="HQ Office" desc="Silicon Valley Tech District, CA" />
                  </div>
                  <div className="relative w-full h-80 rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl group ring-8 ring-slate-50">
                     <img alt="Map" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                     <div className="absolute bottom-6 left-8 flex items-center gap-3">
                        <span className="size-3 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50"></span>
                        <span className="text-slate-900 text-xs font-black bg-white px-4 py-2 rounded-full shadow-xl ring-1 ring-slate-200 uppercase tracking-widest">Global HQ</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>


   );
};

const ContactInfoCard = ({ icon, title, desc, action }: any) => (
   <div className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group">
      <div className="flex items-center gap-6">
         <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-primary group-hover:text-white transition-all shadow-sm ring-1 ring-slate-100">
            <span className="material-symbols-outlined text-[28px]">{icon}</span>
         </div>
         <div>
            <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-1">{title}</h3>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">{desc}</p>
            {action && <span className="text-slate-900 font-black text-base hover:text-primary transition-colors cursor-pointer">{action}</span>}
         </div>
      </div>
   </div>
);

export default Contact;