import React from 'react'

function Header() {
    return (
        <header className="header bg-primary pt-4 pb-3">
            <div className="header-content">
                <h1 className="text-light text-center font-weight-bold mb-3">Employee Directory</h1>
                <p className="text-light text-center">Click the carets to sort by first name or use the search box to narrow your results.</p>
            </div>
        </header>
    )
}

export default Header;