import React from "react";
import '../scss/desktop.scss';
import Section from './section';
import {connect} from "react-redux";
import Extended from './extended-card';
import CreateCard from './create';
import {changeOrderCards, closeCreateModal, openCardExtended} from "../store/actions";
import {DragDropContext} from "react-beautiful-dnd";


class Desktop extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            extendedID: '',
            extendedName: '',
            extendedText: '',
            extendedStage: '',
            extendedColor: ''
        }
    }

    clickOnCard(id, name, text, stage, color) {
        this.setState({extendedID: id});
        this.setState({extendedName: name});
        this.setState({extendedText: text});
        this.setState({extendedStage: stage});
        this.setState({extendedColor: color});
        this.props.openCardExtended();
    }

    render() {
        let createWindow = (this.props.createModalShow) ?
                <CreateCard/>
                : '',
            extendedWindow = (this.props.extendedWindow) ?
                <Extended
                    id={this.state.extendedID}
                    name={this.state.extendedName}
                    text={this.state.extendedText}
                    stage={this.state.extendedStage}
                    color={this.state.extendedColor}
                />
                : '';

        function handleOnDragEnd(result) {
            let src_i = result.source.index,
                src_stage = result.source.droppableId,
                dst_i = result.destination.index,
                dst_stage = result.destination.droppableId;
            this.props.changeOrderCards(src_i, dst_i, src_stage, dst_stage);
        }

        return(

            <div className="desktop">
                <DragDropContext onDragEnd={handleOnDragEnd.bind(this)}>

                    <Section click={this.clickOnCard.bind(this)} name="To Do" stage="todo" color="yellow"/>

                    <Section click={this.clickOnCard.bind(this)} name="Doing" stage="doing"/>

                    <Section click={this.clickOnCard.bind(this)} name="Done" stage="done" color="green"/>

                </DragDropContext>
                {createWindow}
                {extendedWindow}
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        createModalShow: state.createMod.createModalShow,
        cards: state.cards.cards,
        extendedWindow: state.cards.cardExtendedOpen
    };
};
const mapDispatchToProps = {
    closeCreateModal,
    openCardExtended,
    changeOrderCards
};

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);