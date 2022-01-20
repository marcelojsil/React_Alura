import React, { Component } from "react";

export default class Formulario extends Component {
    render() {
        return(
            <form>
                <input placeholder='texto1' />
                <textarea placeholder='texto2' />
                <button>Botão</button>
            </form>
        );
    }
} 