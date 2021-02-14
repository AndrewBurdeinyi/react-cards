import React from 'react';
import {connect} from "react-redux";
import {closeCardExtended, editCard} from "../store/actions";


class Extended extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            text: this.props.text,
            stage: this.props.stage,
            color: this.props.color
        }
    }

    updateName(e) {
        this.setState({name: e.target.value});
    }
    updateText(e) {
        this.setState({text: e.target.value});
    }
    updateStage(e) {
        this.setState({stage: e.target.value});
    }
    selectColor(e) {
        if(e.target.classList.contains('colorBlock')) {
            let color = e.target.dataset.value;
            this.setState({color});
        }
    }
    editCard() {
        this.props.editCard(this.state.id, this.state.name, this.state.text, this.state.stage, this.state.color);
        this.props.closeCardExtended();
    }

    render(){
        return(
            <div className="modal-bg">
                <div className="modal-body" style={{background: this.state.color}}>
                    <input type="text" onChange={this.updateName.bind(this)} placeholder={this.state.name}></input>
                    <textarea value={this.state.text} onChange={this.updateText.bind(this)}/>
                    <div className="select">
                        <select defaultValue={this.state.stage} onChange={this.updateStage.bind(this)}>
                            <option value="todo">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <div className="color" onClick={this.selectColor.bind(this)}>
                            <div data-value="lightyellow" className="yellow colorBlock"></div>
                            <div data-value="lightpink" className="red colorBlock"></div>
                            <div data-value="lightgreen" className="green colorBlock"></div>
                            <div data-value="lightskyblue" className="blue colorBlock"></div>
                        </div>
                    </div>
                    <div className="modal-body-btns">
                        <div onClick={this.editCard.bind(this)}>Edit</div>
                        <div onClick={this.props.closeCardExtended}>Cancel</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    closeCardExtended,
    editCard
};

export default connect(null, mapDispatchToProps)(Extended);