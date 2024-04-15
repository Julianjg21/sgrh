import React from "react";
import OptionsMenu from "../../components/MainMenu/OptionsMenu";
import ModuleWindow from "../../components/MainMenu/ModuleWindow";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class MainMenuLayout extends React.Component {
  render() {
    return (
      //diseño de el pagina principal
      <div className="container-fluid ">
        <div className="row bg-dark">
          <div class="col-1">
            <h1 className="text-white text-start  mt-2 " id="text-logo">
              JUVENTUS
              <br />
              <span className="text-danger " id="textLogo-span">
                BAR
              </span>
            </h1>
          </div>
        </div>
        <div className="row container-fluid p-0 ">
          <div className="col-2  p-0 div-openOptions">
            <button  className="h-100 btn-optionsMenu btn btn-outline-dark d-flex justify-content-between align-items-center">
            <span className="flex-grow-1">Opciones</span>
              <FontAwesomeIcon className="" icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-2  p-0">
            <OptionsMenu /* se renderizan el componente con los botones de cada modulo*/ />
          </div>
          <div className="col-10 bg-white">
            <ModuleWindow /* se renderiza el componente que mostrara cada modulo */ />
            <div></div>
          </div>
        </div>
        <div className="row bg-dark mt-2">ds</div>
      </div>
    );
  }
}

export default MainMenuLayout;
