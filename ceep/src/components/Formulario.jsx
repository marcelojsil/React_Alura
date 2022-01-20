import React, { Component } from "react";
import "./CardEstilos/StyleForm.css"

export default class Formulario extends Component {
    render() {
        return(
            <form className="form">
                <input placeholder='texto1' className="text"/>
                <textarea placeholder='texto2' className="area"/>
                <button className="btn">Botão</button>
            </form>
        );
    }
} 