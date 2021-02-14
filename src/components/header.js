import react from "react";
import React from 'react';
import '../scss/header.scss';
import AddCard from './buttons';

class Header extends React.Component{
    
    render() {
    
        return (

            <div className="right-line">
                <div className="menu-flex">
                    <div className="logo"><h2>{this.props.name}</h2></div>
                    <AddCard />
                    {/* <div className="folders">
                        <div className="folder"></div>
                        <div className="folder"></div>
                        <div className="folder"></div>
                    </div> */}
                </div>
            </div>
            
        );

    }
}

export default Header;