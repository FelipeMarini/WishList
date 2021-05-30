import { Component } from 'react';
import editar from './img/editar.svg'
import excluir from './img/excluir.svg'
import logo from './img/logo.svg'
import select from './img/select.svg'
import tipografia from './img/tipografia.svg'
import './App.css';

class ListaDeDesejos extends Component {
  constructor(props) {
    super(props);
    this.state = {

      listaDesejo: [],
      descricaoUser: '',
      idUser: 0
    }
  }

  buscarDesejo = () => {

    fetch('http://localhost:5000/api/desejo')

      .then(reposta => reposta.json())

      .then(dados => this.setState({ listaDesejo: dados }))

      .catch(error => console.log(error))
  }

  Limpar = () => {
    this.setState({
      descricaoUser: '',
      idUser: 0
    })
  }

  Cadastrar = (event) => {
    event.preventDefault()

    let publi = {
      descricao: this.state.descricaoUser,
      idUsuario: this.state.idUser

    }

    console.log(this.state.idUser)
    console.log(this.state.descricaoUser)
    fetch('http://localhost:5000/api/desejo', {
      method: 'POST',
      body: JSON.stringify(publi),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(resultado => {
        if (resultado.status === 201) {
          console.log("Cadastrado")
        }
      })

      .catch(error => console.log(error))

      .then(this.buscarDesejo)

      .then(this.Limpar)
  }

  atualizaDescricao = async (event) => {
    await this.setState({ descricaoUser: event.target.value })

    console.log("Atualizado")
  }

  atualizarId = async (evento) => {
    await this.setState({ idUser: evento.target.value })

    console.log("Id Atualizado")
  }

  componentDidMount() {
    this.buscarDesejo();

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <body>
        <section>
          <div className="hamburger"><i className="fa fa-bars"></i></div>

          <div className="center-header">
            <div className="header-topo">
              <div className="logo">
                <img src={logo} alt="logo icone" className="icone"></img>
                <img src={tipografia} alt="wish list tipografia" className="letra"></img>
              </div>
            </div>
          </div>
        </section>

</body>
)
}
}
export default ListaDeDesejos;