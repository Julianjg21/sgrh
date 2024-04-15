import React from "react";
import UserSearch from "../UserSearch";

class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: "true" //estado que activa su ventana respectiva
    };

    this.handlebuttonState = this.handlebuttonState.bind(this); //se enlaza el this en la funcion
  } 

//funcion activa la ventana respectiva
  handlebuttonState() {
    this.setState(prevState => ({
      buttonState: !prevState.buttonState
    }))
  }



  renderContent() {
   //renderiza el contenido segun el estado del state
    if (this.state.buttonState) {
      
return(<div className="container">

<h1>Datos Personales</h1>
<div className="container fluid p-0 mt-4">
  <fom>
    <div className="row justify-content-md-center">
      <div className="col-4">
        <div className="d-flex flex-column">
          <label htmlFor="nombres" className="text-start">Nombres</label>
          <input
          id="nombres"
            className="form-control border-dark mx-auto"
            type="text"
            placeholder="Nombres completos del usuario"
          />
        </div>
      </div>
      <div className="col-4 ">
        <div className="d-flex flex-column">
          <label htmlFor="apellidos"  className="text-start">Apellidos</label>
          <input
          id="apellidos"
            className=" form-control border-dark mx-auto"
            type="text"
            placeholder="Apellidos completos del usuario  "
          />
        </div>
      </div>
    </div>


    <div className="row justify-content-md-center mt-4">
      <div className="col-4">
        <div className=" flex-column">
        <label className="text-start" htmlFor="identification">Tipo de Identificacíon</label>
          <select className="form-select border-dark" id="identification">
            <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
            <option value="Cedula Extranjera">Cedula Extranjera</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Documento de identificación nacional pasaporte">Documento de identificación nacional pasaporte</option>
         </select>
        </div>
      </div>
      <div className="col-4 ">
        <div className="d-flex flex-column">
          <label htmlFor="numero-identificacion" className="  text-start">Identificación</label>
          <input
            id="numero-identificacion"
            className=" form-control border-dark mx-auto"
            type="text"
            placeholder="Numero de identificación de el usuario"
          />
        </div>
      </div>
    </div>



     <div className="row justify-content-md-center mt-4">
      <div className="col-4">
        <div className="d-flex flex-column">
          <label htmlFor="telefono" className="text-start">Telefono</label>
          <input
            id="telefono"
            className="form-control form-control mx-auto border-dark"
            type="tel"
            placeholder="Numero de telefono de el usuario"
          />
        </div>
      </div>
      <div className="col-4 ">
        <div className=" flex-column">
          <label htmlFor="fecha-nacimiento" className=" ">Fecha de Nacimiento</label>
          <input
            id="fecha-nacimiento"
            className=" form-control mx-auto border-dark"
            type="date"
          />
        </div>
      </div>
    </div>


    <div class="row justify-content-md-center mt-4">
      <div className="col-4">
        <div className=" flex-column">
          <label htmlFor="correo">Correo Electronico </label>
          <input
        id="correo"    className="text-center form-control mx-auto border-dark" placeholder="Correo electronico de el usuario"></input></div>
      </div>
    </div>

    <div class="border-top border-dark d-inline-block mt-4"> <h2>Rol de Empleado y Datos de Nomina</h2></div>
   
    
    <div class="row justify-content-md-center mt-4">
      <div className="col-4">
        <div className=" flex-column">
          <label htmlFor="rol-empleado">Rol Empleado</label>
          <select id="rol-empleado" className="text-center form-select border-dark mx-auto">
            <option>Bartender</option>
            <option>Mesero</option>
            <option>Host</option>
            <option>Operario de limpieza</option>
            <option>DJ</option>
            <option>Operario de Seguridad</option>
          </select>
        </div>
      </div>
    </div>

    


    <div className="row justify-content-md-center mt-4">
      <div className="col-4">
        <div className="d-flex flex-column">
          <label htmlFor="banco" className="text-start">Banco</label>
          <input
          id="banco"
            className="form-control border-dark mx-auto"
            type="text"
            placeholder="Nombre del Banco"
          />
        </div>
      </div>
      <div className="col-4 ">
        <div className="d-flex flex-column">
          <label htmlFor="numero-cuenta" className="text-start">N.Cuenta</label>
          <input
          id="numero-cuenta"
            className=" form-control mx-auto border-dark"
            type="text"
            placeholder="Numero de cuenta bancario  "
          />
        </div>
      </div>
    </div>

      
   

      <div className="row justify-content-md-center">
        <div className="col-5">
        <button
        className="mb-5 btn btn-warning btn-outline-secondary text-white w-25 mt-5"
        type="submit"
      >
      Registrar
      </button>
                          </div>
                          </div>

  </fom>
</div>
</div>)
      
      
    } else {
      return (
        <div><UserSearch /></div>
      )
    }
  }


  render() {
    return (
      //Botones para activar la ventana  requerida
      <div className="container">
        <div className="row p-0 mb-3">
  <div className="col-6 p-0">
    <button className={`w-100 btn-outline-warning ${this.state.buttonState ?    "btn btn-dark text-white" : "btn btn-light text-black"}`} onClick={this.handlebuttonState}>Crear Usuarios</button>
  </div>
  <div className="col-6 p-0">
  <button className={`w-100 btn-outline-warning ${this.state.buttonState ? "btn btn-light text-black" : "btn btn-dark text-white"}`} onClick={this.handlebuttonState}>Modificar Usuarios</button>
  </div>
</div>
<div>{ this.renderContent()}</div>
      </div>
     
    );
  }
}

export default UserManagement;
