import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import { Card, TextareaAutosize, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

export class PlannerActionButton extends Component {

    //Estado para gerenciar o form
    state = {
        formOpen: false,
        text: ""
    }

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    closeForm = (e) => {
        this.setState({
            formOpen: false,
            text: ""
        });
    };

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text){
            this.setState({
                text: ""
            })
            dispatch(addList(text));
        }

        return;
    }

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({
                text: ""
            })
            dispatch(addCard(listID, text))
        }
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Adicionar nova lista" : "Adicionar novo card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15" : "inherit";

        return(
            <div onClick={this.openForm} style={{...styles.openFormButtonGroup, paddingBottom: 10,opacity: buttonTextOpacity, color: buttonTextColor, background: buttonTextBackground}}>
                <Icon style={{marginTop: 12, paddingRight:5}}>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {

        const { list } = this.props;

        const placeholder = list ? "Digite o titulo da lista" : "Digite um titulo para esse card";
        const buttonTitle = list ? "Adicionar lista" : "Adicionar card";

        return <div>
            <Card style={styles.cardContainer}>
                <TextareaAutosize placeholder={placeholder} autoFocus onBlur={this.closeForm} value={this.state.text} onChange={this.handleInputChange} style={styles.textareaStyle} />
            </Card>
            <div style={styles.formButtonGroup}>
                {/* Deve ser onMouseDown pq no textarea tem onBlur, onClick não funcionaria */}
                <Button onMouseDown={list ? this.handleAddList : this.handleAddCard} variant="contained" style={styles.buttonSave}>{buttonTitle}</Button>
                <Icon style={{ marginLeft: 8, cursor: "pointer", marginTop: 6 }}>close</Icon>
            </div>
        </div>
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alingItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup:{
        marginTop: 8,
        display: "flex",
        alingItems: "center"
    },
    textareaStyle: {
        resize: "none",
        width: "100%",
        overflow: "hidden",
        outline: "none",
        border: "none"
    },
    cardContainer: {
       overflow: "visible",
       minHeight: 80,
       minWidth: 272,
       padding: 8 
    },
    buttonSave: {
        color: "white",
        backgroundColor: "#5aac44"
    }
};

export default connect() (PlannerActionButton);
