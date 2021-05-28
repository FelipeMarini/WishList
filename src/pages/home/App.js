import { Component } from 'react';
import './App.css';

class Desejos extends Component{
  constructor(props){
    super(props)
    this.state = {
        //nomeEstado : valorInicial
        listaDesejo : 0,
        descricao : '',
        idListaAlterado : 0
    }
  }
}
buscarDesejos = () => {
  console.log('agora vamos fazer a chamada para a API')

  fetch('https://localhost:5000/api/wishlist')
  
  .then(resposta => resposta.json())

  .then(dados => this.setState({listaDesejo : dados }))

  .catch(erro => console.log(erro))
}


cadastrarDesejo = (event) => {
  event.preventDefault();
  if (this.state.idListaAlterado !== 0){
    fetch('http://localhost:5000/api/wishlist' + this.state.idListaAlterado, {
      method : 'PUT',
      body : JSON.stringify({descricaoDesejo : this.state.descricao}),
      headers : {
      "Content-Type" : "aplication/json"
      }
    })
  
  
    .then(resposta =>{
      if (resposta.status == 204){
        console.log(
          'Desejo' + this.state.idListaAlterado + 'atualizado!',
          'Seu desejo é:' + this.state.descricao
        )
      }
    })
  
  .then(this.buscarDesejos)
  .then(this.limparCampos)
  }
  else
  {
    fetch('http://localhost:5000/api/wishlist', {
      method : 'POST',

      body : JSON.stringify( { descricaoDesejo : this.state.descricao} ),

      headers : {
        "Content-Type" : "application/json"
      }
    
  })
  .then(console.log('Desejo cadastrado!'))

        .catch(erro => console.log(erro))

        .then(this.buscarDesejos)

        .then(this.limparCampos)
    }
}


  excluirDesejo = (desejo) => {
    console.log('O tipo de Evento ' + desejo.idDesejo + ' foi selecionado!')
    
    fetch('http://localhost:5000/api/wishlist' + desejo.idDesejo, {
      method : 'DELETE'
    })
    .then(resposta => {
      if (resposta.status === 204) {
        console.log('Desejo' + desejo.idDesejo + 'excluído!')
      }
    })
  
    .catch(erro => console.log(erro))
    .then(this.buscarDesejos)
  }


limparCampos = () => {
  this.setState({
      descricao : '',
      idListaAlterado : 0
  })
  // Exibe no console do navegador a mensagem 'Os states foram resetados!
  console.log('Os desejos foram resetados!')
}

render(){
  
}

export default App;
