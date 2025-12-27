import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import News from './pages/News';
import Contact from './pages/Contact';
import Layout from './components/Layout';

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'news' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={setCurrentPage} />;
      case 'about': return <About navigate={setCurrentPage} />;
      case 'services': return <Services navigate={setCurrentPage} />;
      case 'portfolio': return <Portfolio navigate={setCurrentPage} />;
      case 'news': return <News navigate={setCurrentPage} />;
      case 'contact': return <Contact navigate={setCurrentPage} />;
      default: return <Home navigate={setCurrentPage} />;
    }
  };

  return (
    <Layout navigate={setCurrentPage} activePage={currentPage}>
      {renderPage()}

      {/* Demo Switcher - Adjusted for Light Mode */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-white/90 backdrop-blur-md border border-slate-200 rounded-full p-1.5 shadow-xl flex items-center gap-1 max-w-[95vw] overflow-x-auto ring-1 ring-slate-900/5">
        <NavButton active={currentPage === 'home'} onClick={() => setCurrentPage('home')} icon="home" label="Home" />
        <NavButton active={currentPage === 'about'} onClick={() => setCurrentPage('about')} icon="groups" label="About" />
        <NavButton active={currentPage === 'services'} onClick={() => setCurrentPage('services')} icon="grid_view" label="Services" />
        <NavButton active={currentPage === 'portfolio'} onClick={() => setCurrentPage('portfolio')} icon="folder_open" label="Work" />
        <NavButton active={currentPage === 'news'} onClick={() => setCurrentPage('news')} icon="newspaper" label="News" />
        <NavButton active={currentPage === 'contact'} onClick={() => setCurrentPage('contact')} icon="mail" label="Contact" />
      </div>
    </Layout>
  );
}

const NavButton = ({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: string; label: string }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${active
      ? 'bg-primary text-white shadow-md'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
  >
    <span className="material-symbols-outlined text-[18px]">{icon}</span>
    {label}
  </button>
);