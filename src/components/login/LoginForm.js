import React from "react";
import LogginButtons from "./LoginButtons";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeUser: false, //Estado para activar o desactivar botón administrador o empleado
      email: "",
      password: "",
    };
    //Se enlaza "this"
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmite = this.handleSubmite.bind(this);
    this.handleStateTypeEmpleado = this.handleStateTypeEmpleado.bind(this);
    this.handleStateTypeAdmin = this.handleStateTypeAdmin.bind(this);
  }
  //Se selecciona si  inicia sesión como admin o empleado
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
  //envió de  contraseña y  usuario

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
    //Prevenir que se recargue la web
    event.preventDefault();
    //comprobar que funcione correctamente
    console.log("email:", this.state.email);
    console.log("Password:", this.state.password);
    //Se resetean los campos despues de enviarsen
    this.setState({ email: "", password: "" });
  }

  render() {
    //Al cambiar el estado se actualiza el label y el input y el placeHolder
    const textTypeUser = this.state.typeUser
      ? "Numero Identificación"
      : "Correo";
    const placeHolderTypeUser = this.state.typeUser
      ? "Ingrese su numero de documento de identificación"
      : "Ingrese su correo electrónico registrado";

    return (
      <div className="container-fluid justify-content-center bg-black row">
        <div
          className="container bg-white border rounded  border-warning  mt-4 mb-4 col-5 p-0"
          id="col-md-6"
        >
          <LogginButtons
            //Envía funciones como props  al componente  "LogginButtons"
            handleStateTypeEmpleado={this.handleStateTypeEmpleado}
            handleStateTypeAdmin={this.handleStateTypeAdmin}
            //Envía el estado  como props al componente  "LogginButtons"
            typeUser={this.state.typeUser}
          />
          <div className="container-fluid">
            <h1 className="mb-5 mt-5">Iniciar Sesión</h1>
            <form onSubmit={this.handleSubmite}>
              <div className="form-group">
                <label
                  className="float-start"
                  htmlFor="email"
                  id="label-loginText"
                >
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
                <label
                  className="float-start"
                  htmlFor="password"
                  id="label-loginText"
                >
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
              <button
                className="mb-5 btn btn-light w-25 btn-outline-dark"
                type="submit"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
