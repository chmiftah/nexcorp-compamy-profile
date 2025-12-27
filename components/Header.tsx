import React from 'react';

interface Props {
  navigate: (page: any) => void;
  activePage: string;
}

const Header: React.FC<Props> = ({ navigate, activePage }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
            <span className="material-symbols-outlined text-[22px]">change_history</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">NexCorp</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => navigate('home')} className={`text-sm font-semibold transition-colors ${activePage === 'home' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Home</button>
          <button onClick={() => navigate('about')} className={`text-sm font-semibold transition-colors ${activePage === 'about' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>About</button>
          <button onClick={() => navigate('services')} className={`text-sm font-semibold transition-colors ${activePage === 'services' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Services</button>
          <button onClick={() => navigate('portfolio')} className={`text-sm font-semibold transition-colors ${activePage === 'portfolio' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Case Studies</button>
          <button onClick={() => navigate('news')} className={`text-sm font-semibold transition-colors ${activePage === 'news' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Insights</button>
          <button onClick={() => navigate('contact')} className={`text-sm font-semibold transition-colors ${activePage === 'contact' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Contact</button>
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('contact')} className="hidden md:flex h-10 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-bold text-white transition-all hover:bg-primary active:scale-95">
            Get Started
          </button>
          <button className="flex md:hidden size-10 items-center justify-center rounded-full bg-slate-100 text-slate-900">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
