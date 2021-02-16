import React from 'react';
import '../scss/carte.scss';

class Carte extends React.Component {
    render() {
        return (
            <div className="carte">
                <div className="you-prof">
                    <div className="logo"><h2>A</h2></div>
                    <h2 className="username">username@gmail.com</h2>
                    <div className="exit"><p>Exit</p></div>
                </div>
                <ul className="folders">
                    <li className="fld">Folder Name</li>
                    <li className="fld">Folder 2</li>
                    <li className="fld">Folder for test</li>
                </ul>
                <div className="add-new-fld"><p>Add</p></div>
                <div className="current-folder">
                    <h3>Folder Name</h3>
                    <div className="cards-info">
                        <p>To Do: <span>2</span></p>
                        <p>Doing: <span>0</span></p>
                        <p>Done: <span>1</span></p>
                    </div>
                    <div className="admins">
                        <p>Admins:</p>
                        <div className="admin-name master">
                            <p>username@gmail.com</p>
                        </div>
                        <div className="admin-name">
                            <p>person@gmail.com</p>
                            <span>x</span>
                        </div>
                        <div className="admin-name add-new">
                            <p>add</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Carte;