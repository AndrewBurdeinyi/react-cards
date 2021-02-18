import React from 'react';
import '../scss/carte.scss';
import {connect} from "react-redux";
import {addFldClose, addFldOpen, changeCurrentFolder} from "../store/actions";
import CreateFld from './create-folder';

class Carte extends React.Component {
    render() {

        let folders = this.props.fld.folders,
            current = this.props.fld.current,
            createFld = (this.props.add) ?
                <CreateFld/>
                : '';

        return (
            <div className="carte">
                <div className="you-prof">
                    <div className="logo"><h2>A</h2></div>
                    <h2 className="username">username@gmail.com</h2>
                    <div className="exit"><p>Exit</p></div>
                </div>
                <ul className="folders">
                    {folders.map((item, index) =>{
                        if(item.name == current.name){
                            return (
                                <li
                                    key={index}
                                    className='fld current-fld'
                                >{item.name}</li>
                            )
                        } else {
                            return (
                                <li
                                    onClick={() => this.props.changeCurrentFolder(item.id)}
                                    key={index}
                                    className='fld'
                                >{item.name}</li>
                            )
                        }
                    })}
                    {createFld}
                </ul>
                <div onClick={this.props.addFldOpen} className="add-new-fld"><p>Add</p></div>
                <div className="current-folder">
                    <h3>{current.name}</h3>
                    <div className="cards-info">
                        <p>To Do: <span>{this.props.cards.todo.length}</span></p>
                        <p>Doing: <span>{this.props.cards.doing.length}</span></p>
                        <p>Done: <span>{this.props.cards.done.length}</span></p>
                    </div>
                    <div className="admins">
                        <p>Admins:</p>
                        <div className="admin-name master">
                            <p>username@gmail.com</p>
                        </div>
                        {/*<div className="admin-name">*/}
                            {/*<p>person@gmail.com</p>*/}
                            {/*<span>x</span>*/}
                        {/*</div>*/}
                        {/*<div className="admin-name add-new">*/}
                            {/*<p>add</p>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      fld: state.fold,
      cards: state.cards.cards,
      add: state.switch.createFolder
  };
};
const mapDispatchToProps = {
    changeCurrentFolder,
    addFldOpen,
    addFldClose
};

export default connect(mapStateToProps, mapDispatchToProps)(Carte);