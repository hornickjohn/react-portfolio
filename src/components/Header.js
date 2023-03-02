import React, { useState } from 'react';
import Navigation from './Navigation'
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

//TODO remove props if unused
export default function Header(props) {
    const [page, setPage] = useState('Portfolio')

    function renderPage() {
        switch(page) {
            case 'About':
                return <About />
            case 'Contact':
                return <Contact />
            case 'Resume':
                return <Resume />
            default:
                return <Portfolio />
        }
    }

    function changePage(newPage) {
        setPage(newPage);
    }

    return (
        <div>
            <header>
                <h1>John Hornick</h1>
                <Navigation currentPage={page} changePage={changePage} />
            </header>
            <main>
                {renderPage()}
            </main>
        </div>
    );
}