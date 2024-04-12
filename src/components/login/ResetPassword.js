import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,  //Estado que controla el proceso de restablecimiento de contraseña
      email: "",
      code: "",  
      password: "",
    };
   //Se enlaza "this"
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handleCodeSubmit = this.handleCodeSubmit.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
  }
  handleEmailSubmit(event) {
    //Prevenir que se recargue la web
    event.preventDefault();
    //Al enviarse el formulario se activa el siguiente proceso de restablecimiento de contraseña
    this.setState({
      stage: 1,
    });
  }
  handleCodeSubmit(event) {
    //Prevenir que se recargue la web
    event.preventDefault();
    //Al enviarse el formulario se activa el siguiente proceso de restablecimiento de contraseña
    this.setState({
      stage: 2,
    });
  }
  handlePasswordSubmit(event) {
    event.preventDefault();
    alert("Contraseña actualizada exitosamente"); //Se comprueba que este funcionando correctamente
  }
//Comprueba y renderiza el proceso segun el estado
  renderContent() {
    const { email, code, password } = this.state; 
    switch (this.state.stage) { //Se comprueba que proceso renderizar
      case 0:
        return (
          <div
            className="container position-fixed top-50 start-50 translate-middle col-6 col-lg-6 h-75 bg-white d-flex flex-column justify-content-center align-items-center border rounded border-warning p-0"
            id="window-reset"
          >
            <div className="container-fluid p-0 position-absolute top-0 end-0">
              <button
                className="btn btn-light   float-end"
                onClick={this.props.handleDesactiveWindow}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="container-fluid p-0">
              <h1 className="mb-5 mt-5 text-left" id="h1-resetPasswordForm">
                Recuperación de Contraseña
              </h1>
              <form
                onSubmit={this.handleEmailSubmit}
                className="d-flex flex-column align-items-center"
              >
                <label
                  id="label-resetPasswordForm"
                  htmlFor="email"
                  className="text-center mb-2"
                >
                  Ingrese su correo electrónico para restaurar su contraseña:
                </label>
                <input
                  id="email"
                  className="w-75 mb-3 form-control"
                  type="email"
                  placeholder="Ingrese su correo registrado"
                  value={email}
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                />
                <button
                  className="btn btn-light btn-outline-dark w-25 m-5"
                  type="submit"
                >
                  Buscar
                </button>
              </form>
            </div>
          </div>
        );
      case 1:
        return (
          <div
            className="container position-fixed top-50 start-50 translate-middle col-6 col-lg-6 h-75 bg-white  d-flex flex-column justify-content-center align-items-center border rounded  border-warning "
            id="window-reset"
          >
            <div className="container-fluid p-0 position-absolute top-0 end-0">
              <button
                className="btn btn-light   float-end"
                onClick={this.props.handleDesactiveWindow}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="container-fluid">
              <h1 className="mb-5 mt-5 text-left" id="h1-resetPasswordForm">
                Recuperación de Contraseña
              </h1>
              <form
                onSubmit={this.handleCodeSubmit}
                className="d-flex flex-column align-items-center"
              >
                <label
                  id="label-resetPasswordForm"
                  htmlFor="codeText"
                  className="text-center mb-2 "
                >
                  Porfavor ingrese el codigo de recurperacion enviado a{" "}
                  <strong className="text-primary">
                    julianjimenez2001@hotmail.com
                  </strong>
                </label>
                <input
                  id="codeText"
                  className="w-75  mb-3 form-control"
                  type="text"
                  placeholder="Ingrese el codigo recibido"
                  value={code}
                  onChange={(event) =>
                    this.setState({ code: event.target.value })
                  }
                />
                <button
                  className="btn btn-light btn-outline-dark w-25 m-5"
                  type="submit"
                >
                  Intentar
                </button>
              </form>
            </div>
          </div>
        );
      case 2:
        return (
          <div
            className="container position-fixed top-50 start-50 translate-middle col-6 col-lg-6 h-75 bg-white  d-flex flex-column justify-content-center align-items-center border rounded  border-warning "
            id="window-reset"
          >
            <div className="container-fluid p-0 position-absolute top-0 end-0">
              <button
                className="btn btn-light   float-end"
                onClick={this.props.handleDesactiveWindow}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="container-fluid">
              <h1 className="mb-5 mt-5 text-left" id="h1-resetPasswordForm">
                Recuperación de Contraseña
              </h1>
              <form
                onSubmit={this.handlePasswordSubmit}
                className="d-flex flex-column align-items-start"
              >
                <label
                  id="label-resetPasswordForm"
                  htmlFor="passwordText"
                  className="text-center mb-2"
                >
                  Nueva Contraseña
                </label>
                <input
                  id="passwordText"
                  className="w-100 mb-3 form-control"
                  type="password"
                  placeholder="Escriba la nueva contraseña"
                  value={password}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />
                <label
                  id="label-resetPasswordForm"
                  htmlFor="passwordText"
                  className="mb-2"
                >
                  Repetir Contraseña
                </label>
                <input
                  id="passwordText"
                  className="w-100 mb-3 form-control"
                  type="password"
                  placeholder="Repita la contraseña ingresada"
                  value={password}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />
                <button
                  className="btn btn-light btn-outline-dark w-50 mx-auto mb-5"
                  type="submit"
                >
                  Restaurar Contraseña
                </button>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>; //Se renderiza la funcion "renderContent"
  }
}

export default ResetPassword;
