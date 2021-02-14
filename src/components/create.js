import React from 'react';
import '../scss/create.scss';
import {connect} from "react-redux";
import {addNewCard, closeCreateModal} from '../store/actions';

class CreateCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'New Card',
            text: '',
            stage: 'todo',
            color: 'lightyellow'
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
    createCard() {
        this.props.addNewCard(this.state.name, this.state.text, this.state.stage, this.state.color);
        this.props.closeCreateModal();
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
                        <div onClick={this.createCard.bind(this)}>Create</div>
                        <div onClick={this.props.closeCreateModal}>Cancel</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    closeCreateModal,
    addNewCard
};

export default connect(null, mapDispatchToProps)(CreateCard);