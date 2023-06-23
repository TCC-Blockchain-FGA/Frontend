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

  history() {
    window.location.href = '/historic';
  }

  logout() {
    localStorage.setItem('token', '');
    window.location.href = '/';
  }

  close() {
    window.location.href = '/businessProfile';
  }

  render() {
    return (
      <div id="HeaderComponent">
        {
          this.props.history &&
          <img onClick={() => {this.history();}} src={require("../../assets/imgs/history.png").default} alt="History" className="imgLeft"/>
        }
        { this.props.title }
        {
          this.props.logout &&
          <img onClick={() => {this.logout();}} src={require("../../assets/imgs/logout.png").default} alt="Logout" className="img"/>
        }
        {
          this.props.close &&
          <img onClick={() => {this.close();}} src={require("../../assets/imgs/close.png").default} alt="Close" className="img"/>
        }
      </div>
    );
  }
}

export default Login;
