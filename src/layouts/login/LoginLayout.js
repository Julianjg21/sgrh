import React from "react";
import company_logo from "./images/company_logo.png";
import {
  faCircleQuestion,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Se agregan y se estiliza el componente final del "Login"
class LoginLayout extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-white  p-0">
        <div className="row">
          <div className="col-12 bg-white">
            <img
              className="float-start img-fluid"
              src={company_logo}
              alt="Logo de la empresa"
              width="120px"
            />
          </div>
          <div className="col-12 p-0">
         
            <this.props.loginForm  /*Se renderiza el componente "LoginForm" recibido como prop*//> 

          </div>
         
          <div className="col-12" id="div-footer">
            <div className="row">
              <div className="col-6">
                <a href="nothing">Ayuda</a>
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="fa-2x"
                  id="footer-icons"
                />
              </div>
              <div className="col-6  ">
                {" "}
                <p>
                  {" "}
                  Calle XXXXX{" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="fa-2x"
                    id="footer-icons"
                  />
                  <br /> N XXXXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginLayout;