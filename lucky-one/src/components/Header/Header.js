import "./Header.css";
import React from 'react';


const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-center my-4">
                <h1 className="text-dark fw-bold fs-1">TRAVEL ZONE</h1>
            </div>
            <h3 className="text-center header-text">Choose 4 Places to Visit</h3>
        </div>
    );
};

export default Header;