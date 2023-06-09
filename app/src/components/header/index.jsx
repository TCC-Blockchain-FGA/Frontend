/* eslint-disable */
import React from 'react';
import BackendServices from '../../services/BackendServices';
import Header from '../../components/header';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };
  }

  componentDidMount() {
  }

  logout() {
    localStorage.setItem('token', '');
    window.location.href = '/';
  }

  render() {
    return (
      <div id="HeaderComponent">
        { this.props.title }
        {
          this.props.logout &&
          <img onClick={() => {this.logout();}} src={require("../../assets/imgs/logout.png").default} alt="Logout" className="img"/>
        }
      </div>
    );
  }
}

export default Login;
