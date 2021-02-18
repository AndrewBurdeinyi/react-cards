import React from 'react';
import '../scss/header.scss';
import AddCard from './buttons';
import {connect} from "react-redux";
import {toggleCarte} from "../store/actions";

class Header extends React.Component{
    
    render() {
    
        return (

            <div className="up-line">
                <div className="menu-flex">
                    <div onClick={this.props.toggleCarte} className="menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="folder">
                        <h3>{this.props.folder}</h3>
                    </div>
                    <AddCard />
                </div>
            </div>
            
        );

    }
}
const mapStateToProps = state => {
    return {
        folder: state.fold.current.name
    }
};
const mapDispatchToProps = {
    toggleCarte
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);