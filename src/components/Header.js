import React from 'react';

function Header ({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-default" id="home">
            <div class="container">
                <div class="navbar-header">
                
                <a class="navbar-brand" href="#home">Connor Blake</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a onClick={() => handlePageChange('About')}>ABOUT</a></li>
                    <li><a onClick={() => handlePageChange('Projects')}>Projects</a></li>
                </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header;