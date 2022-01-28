import React, { Component } from "react";
import "./StyleForm.css"

export default class Formulario extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleMudancaTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return(
            <form className="form" onSubmit={this._criarNota.bind(this)}>
                <input 
                    type="text"
                    placeholder='texto1' 
                    className="text"
                    onChange={this._handleMudancaTitulo.bind(this)} />
                <textarea 
                    placeholder='texto2'
                    className="area"
                    rows={15}
                    onChange={this._handleMudancaTexto.bind(this)} />
                <button 
                    className="btn">Botão</button>
            </form>
        );
    }
} 