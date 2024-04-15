import React from "react";
import LoginLayout from "../layouts/login/LoginLayout";
import LoginForm from "../components/login/LoginForm";


class LoginPage extends React.Component {
  
    render(){
        return (
          <div> <LoginLayout loginForm={LoginForm} /*Se pasa como prop el componente LoginForm*/ /></div>
        )
            
    }
}

export default LoginPage;

