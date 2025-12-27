import React from 'react';

interface Props {
    navigate: (page: any) => void;
}

const Footer: React.FC<Props> = ({ navigate }) => {
    return (
        <footer className="border-t border-slate-100 bg-white pt-20 pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-4 mb-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
                            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-white">
                                <span className="material-symbols-outlined text-[20px]">change_history</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">NexCorp</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">Empowering businesses with cutting-edge technology and strategic innovation since 2012.</p>
                    </div>
                    <div>
                        <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-900">Services</h4>
                        <ul className="space-y-4 text-sm font-semibold text-slate-500">
                            <li><button onClick={() => navigate('services')} className="hover:text-primary transition-colors">Digital Transformation</button></li>
                            <li><button onClick={() => navigate('services')} className="hover:text-primary transition-colors">Cloud Solutions</button></li>
                            <li><button onClick={() => navigate('services')} className="hover:text-primary transition-colors">Cybersecurity</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-900">Company</h4>
                        <ul className="space-y-4 text-sm font-semibold text-slate-500">
                            <li><button onClick={() => navigate('about')} className="hover:text-primary transition-colors">About Us</button></li>
                            <li><button onClick={() => navigate('home')} className="hover:text-primary transition-colors">Careers</button></li>
                            <li><button onClick={() => navigate('news')} className="hover:text-primary transition-colors">Blog</button></li>
                            <li><button onClick={() => navigate('contact')} className="hover:text-primary transition-colors">Contact</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-900">Subscribe</h4>
                        <p className="mb-5 text-sm text-slate-500 font-medium leading-relaxed">Get the latest insights delivered to your inbox monthly.</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Enter email" type="email" />
                            <button className="rounded-full bg-slate-900 p-3 text-white hover:bg-primary shadow-sm transition-all flex items-center justify-center min-w-[48px]">
                                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-100 pt-8 text-sm font-semibold text-slate-400">
                    <p>© 2024 NexCorp Inc. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <button className="hover:text-slate-900 transition-colors">Privacy Policy</button>
                        <button className="hover:text-slate-900 transition-colors">Terms of Service</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
