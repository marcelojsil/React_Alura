import { Component } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import ListaDeNotas from './components/ListaDeNotas';

class App extends Component {

  constructor() {
    super();
    this.notas = [];
    this.state = {};
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    this.notas.push(novaNota);
    this.setState({
      notas:this.notas
    })
  }

  render() {
    return (
      <section>
        <Formulario criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.notas}/>
      </section>
    );
  }
}

export default App;
