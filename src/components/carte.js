import React, {useContext} from 'react';
import '../scss/carte.scss';
import CreateFld from './create-folder';
import {AuthContext} from "../context/auth.context";

function Carte(props) {
    const auth = useContext(AuthContext);
    let folders = props.fld.folders,
        current = props.fld.current,
        createFld = (props.add) ?
            <CreateFld/>
            : '';

    return (
        <div className="carte">
            <div className="you-prof">
                <div className="logo"><h2>A</h2></div>
                <h2 className="username">{auth.usrID}</h2>
                <div onClick={auth.logout} className="exit"><p>Exit</p></div>
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
                                onClick={() => props.changeCurrentFolder(item.id)}
                                key={index}
                                className='fld'
                            >{item.name}</li>
                        )
                    }
                })}
                {createFld}
            </ul>
            <div onClick={props.addFldOpen} className="add-new-fld"><p>Add</p></div>
            <div className="current-folder">
                <h3>{current.name}</h3>
                <div className="cards-info">
                    <p>To Do: <span>{props.cards.todo.length}</span></p>
                    <p>Doing: <span>{props.cards.doing.length}</span></p>
                    <p>Done: <span>{props.cards.done.length}</span></p>
                </div>
                <div className="admins">
                    {/*<p>Admins:</p>*/}
                    {/*<div className="admin-name master">*/}
                        {/*<p>username@gmail.com</p>*/}
                    {/*</div>*/}
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

export default Carte;