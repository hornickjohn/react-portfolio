import React, { useState } from 'react';
import Navigation from './Navigation'

export default function Header(props) {
    const [page, setPage] = useState('')

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
                {/* TODO name/title element floating left in header */}
                <Navigation currentPage={page} changePage={changePage} />
            </header>
            {renderPage()}
        </div>
    );
}