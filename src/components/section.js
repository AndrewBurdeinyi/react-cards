import React from 'react';
import '../scss/section.scss';
import {Card} from "./card";
import {connect} from "react-redux";

class Section extends React.Component{

    render() {
        return(

            <div className="section">

                <div className="section-header" style={{borderColor: this.props.color}}>
                    <p>{this.props.name}</p>
                </div>
                    <div className="section-body">
                        {this.props.cards.map((item, index) => {
                            if(item.stage == this.props.stage) {
                                return (
                                    <div className="cards-block" key={index}>
                                        <Card
                                            click={this.props.click}
                                            id={item.id}
                                            name={item.name}
                                            text={item.text}
                                            stage={item.stage}
                                            color={item.color}
                                        />
                                    </div>
                                )
                            }
                        })
                        }
                    </div>
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