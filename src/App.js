import React from 'react';
import './App.scss';
import Header from './components/header';
import Desktop from './components/desktop';
import {connect} from "react-redux";
import Carte from "./components/carte";


class App extends React.Component {

    render() {

        return (

            <>
                <Header name="A"/>
                <div className={(this.props.carteShow) ? 'room show-carte ' : 'room'}>
                    <Carte/>
                    <Desktop/>
                </div>
            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        carteShow: state.switch.carteShow,
    };
};

export default connect(mapStateToProps)(App);