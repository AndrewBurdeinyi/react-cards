import React from 'react';
import {connect} from "react-redux";
import {addFldClose, addNewFolder} from "../store/actions";

class CreateFld extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    render() {
        function createConfirm() {
            let name = this.props.fld.map(item => item.name.toLowerCase());
            if (this.state.name == '' || name.indexOf(this.state.name.toLowerCase()) != -1) {
                alert('Err! This name is incorrect');
            } else {
                this.props.addNewFolder(this.state.name);
            }

            this.props.addFldClose();
        }

        return (
            <li className="fld add-fld-field">
                <input onChange={this.updateName.bind(this)} type="text"></input>
                <div onClick={createConfirm.bind(this)} className="fld-ok">OK</div>
                <div onClick={this.props.addFldClose} className="fld-cancel">Cancel</div>
            </li>
        )
    }
}
const mapStateToProps = state => {
    return {
      fld: state.fold.folders
    };
};
const mapDispatchToProps = {
    addFldClose,
    addNewFolder
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateFld);