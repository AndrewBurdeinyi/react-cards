import React from 'react';
import '../scss/card.scss';

export class Card extends React.Component{



    render(){
        return(
            <div
                onClick={()=>this.props.click(this.props.id, this.props.name, this.props.text, this.props.stage, this.props.color)}
                className="card"
                style={{background: this.props.color}}
            >
                <h2>{this.props.name}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}


