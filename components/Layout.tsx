import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
    children: React.ReactNode;
    navigate: (page: any) => void;
    activePage: string;
}

const Layout: React.FC<Props> = ({ children, navigate, activePage }) => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-white font-display text-slate-900">
            <Header navigate={navigate} activePage={activePage} />
            <main className="flex-1">
                {children}
            </main>
            <Footer navigate={navigate} />
        </div>
    );
};

export default Layout;
