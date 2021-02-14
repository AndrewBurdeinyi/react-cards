import React from 'react';
import '../scss/buttons.scss';
import { connect } from 'react-redux';
import {showCreateModal} from "../store/actions";
 

class AddCard extends React.Component{
    render(){

        return(

            <div onClick={()=>{this.props.showCreateModal()}} className="add-card"><p>+</p></div>

        );
    }
}
const mapDispatchToProps = {
    showCreateModal
};

export default connect(null, mapDispatchToProps)(AddCard);
