import React from 'react';
import '../App.scss';
import Header from '../components/header';
import Desktop from '../components/desktop';
import {connect} from "react-redux";
import Carte from "../components/carte";
import {addFldClose, addFldOpen, changeCurrentFolder} from "../store/actions";

class Cabinet extends React.Component {
    render() {
        return(

            <>
                <Header name="A"/>
                <div className={(this.props.carteShow) ? 'room show-carte ' : 'room'}>
                    <Carte
                        fld={this.props.fld}
                        cards={this.props.cards}
                        add={this.props.add}
                        changeCurrentFolder={this.props.changeCurrentFolder}
                        addFldOpen={this.props.addFldOpen}
                        addFldClose={this.props.addFldClose}
                    />
                    <Desktop/>
                </div>
            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        carteShow: state.switch.carteShow,
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

export default connect(mapStateToProps, mapDispatchToProps)(Cabinet);