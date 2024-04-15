import React from "react";
import UserManagement from "./Modules/userManagement/UserManagement";
class ModuleWindow extends React.Component{
    

render(){
    //se renderiza el componente ""UserManagement
    return (<div className="div-moduleWindow "> <UserManagement /></div>)
  
}
}


export default ModuleWindow;