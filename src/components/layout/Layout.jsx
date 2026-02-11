import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from '../ui/ScrollToTopButton';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-bg-dark text-white selection:bg-primary/30 selection:text-white">
            <ScrollToTop />
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default Layout;
