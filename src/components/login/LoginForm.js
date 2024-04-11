import React from "react";
import LogginButtons from "./LoginButtons";

class LoginForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeUser: false,
      email: "",
      password: "",
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmite = this.handleSubmite.bind(this);
    this.handleStateTypeEmpleado = this.handleStateTypeEmpleado.bind(this);
    this.handleStateTypeAdmin = this.handleStateTypeAdmin.bind(this);
  }
  //aqui se selecciona si  inicia sesion como admin o empleado
  handleStateTypeEmpleado() {
    this.setState({
      typeUser: true,
    });
    console.log(this.state.typeUser);
  }
  handleStateTypeAdmin() {
    this.setState({
      typeUser: false,
    });
    console.log(this.state.typeUser);
  }
  //envio de la contrseña y el usuario

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmite(event) {
    event.preventDefault();
    //aqui es para comprobar que esta funcionando
    console.log("email:", this.state.email);
    console.log("Password:", this.state.password);
    //aqui se resetean los campos despues de enviarnsen
    this.setState({ email: "", password: "" });
  }

  render() {
    const textTypeUser = this.state.typeUser
      ? "Numero Identificación"
      : "Correo";
    const placeHolderTypeUser = this.state.typeUser
      ? "Ingrese su numero de documento de identificación"
      : "Ingrese su correo electronico registrado";

    return (
      <div className="container-fluid d-inline-block bg-black row">
        <div
          className="container bg-white border rounded  border-warning mt-4 mb-4 col-5 p-0"
        >
          <LogginButtons
            handleStateTypeEmpleado={this.handleStateTypeEmpleado}
            handleStateTypeAdmin={this.handleStateTypeAdmin}
            typeUser={this.state.typeUser}
          />
          <div className="container-fluid">
          <h1 className="mb-5 mt-5">Iniciar Sesion</h1>
          <form onSubmit={this.handleSubmite}>
            <div className="form-group">
              <label className="float-start" htmlFor="email" id="label-loginText">
                {textTypeUser}
              </label>
              <input
                className="form-control mb-5"
                type="text"
                value={this.state.email}
                placeholder={placeHolderTypeUser}
                id="email"
                onChange={this.handleEmailChange}
              ></input>
            </div>
            <div className="form-group">
              <label className="float-start" htmlFor="password" id="label-loginText">
                Contraseña
              </label>
              <input
                className="form-control mb-5"
                type="text"
                value={this.state.password}
                placeholder="Ingrese su contraseña"
                id="password"
                onChange={this.handlePasswordChange}
              ></input>
            </div>
            <button className="mb-5 btn btn-light w-25 btn-outline-dark" type="submit">
              Ingresar
            </button>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default LoginForms;
