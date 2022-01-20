import React, { Component } from "react";
import Notas from "./Notas";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho","Trabalho","Estudo").map((categoria) => {
                    return (
                        <li>
                            <Notas />
                            <div>{categoria}</div>
                        </li>
                    )
                })}
            </ul>
        );
    };
};

export default ListaDeNotas;