import React from 'react';
import '../scss/section.scss';
import {Card} from "./card";
import {connect} from "react-redux";

import { Droppable, Draggable } from 'react-beautiful-dnd';

class Section extends React.Component{

    render() {

        let cardArr = this.props.cards[this.props.stage];

        return(

            <div className="section">

                <div className="section-header" style={{borderColor: this.props.color}}>
                    <p>{this.props.name}</p>
                </div>
                <Droppable droppableId={this.props.stage}>
                    {(provided) => (
                        <div className={`section-body ${this.props.stage}`} {...provided.droppableProps} ref={provided.innerRef}>
                            {cardArr.map((item, index) => {
                                return (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div className="cards-block" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <Card
                                                    click={this.props.click}
                                                    id={item.id}
                                                    name={item.name}
                                                    text={item.text}
                                                    stage={this.props.stage}
                                                    color={item.color}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>

        );

    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards.cards
    };
};

export default connect(mapStateToProps)(Section);

