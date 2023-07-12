/* eslint-disable */
import React from 'react';
import IssuerServices from '../../services/IssuerServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  gup(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? '' : results[1];
  }

  maskCNPJ(login) {
      var value = login.target.value;
      var returnValue = value.replace(/\D/g, "");
      if (returnValue.length > 12) {
        returnValue = returnValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2}).*/, "$1.$2.$3/$4-$5");
      }
      else if (returnValue.length > 9) {
        returnValue = returnValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4}).*/, "$1.$2.$3/$4");
      }
      else if (returnValue.length > 6) {
        returnValue = returnValue.replace(/^(\d{2})(\d{3})(\d{0,3})/, "$1.$2.$3");
      }
      else if (returnValue.length > 3) {
        returnValue = returnValue.replace(/^(\d{2})(\d{0,3})/, "$1.$2");
      }
      this.setState({login: returnValue});
  }

  handleChange(e, item) {
    switch(item){
      case "password":
        this.setState({password: e.target.value});
        break;
      case "email":
        this.setState({login: e.target.value});
        break;
      default:
        break;
    }
  }

  businessLogin() {
    return (
      <div className="contentForm">
        <p className="label">CNPJ</p>
        <input className="input" type="text" pattern="\d*" placeholder="Digite o seu CNPJ" onChange={(e) => this.maskCNPJ(e, this)} value={this.state.login}></input>

        <p className="label">Senha</p>
        <input className="input" type="password" placeholder="Digite sua senha" onChange={(e) => this.handleChange(e, "password")} value={this.state.password}></input>
      </div>
    )
  }

  userLogin() {
    return (
      <div className="contentForm">
        <p className="label">E-mail</p>
        <input className="input" type="email" placeholder="Digite o seu email" onChange={(e) => this.handleChange(e, "email")} value={this.state.login}></input>

        <p className="label">Senha</p>
        <input className="input" type="password" placeholder="Digite sua senha" onChange={(e) => this.handleChange(e, "password")} value={this.state.password}></input>
      </div>
    )
  }

  makeLogin() {
    if(this.gup('type') === 'business'){
      IssuerServices.loginOrg({
        login: this.state.login,
        password: this.state.password,
      }).then(function(res){
        localStorage.setItem('token', res.data.token);
        window.location.href = '/businessProfile';
      }).catch(function(err){
        return toast.error("Erro! Verifique as informações");
      });
    }
    else {
      IssuerServices.login({
        login: this.state.login,
        password: this.state.password,
      }).then(function(res){
        localStorage.setItem('token', res.data.token);
        window.location.href = '/userProfile';
      }).catch(function(err){
        return toast.error("Erro! Verifique as informações");
      });
    }
  }

  render() {
    return (
      <section id="LoginPage">
      <div className="sideLeftContent">
        <br/><br/><br/><br/>
        <img src={require("../../assets/imgs/logo.png").default} alt="Logo" className="logo" />
      </div>

      <div className="sideRightContent">
        <br/><br/><br/>
        <img src={require("../../assets/imgs/logo.png").default} alt="Logo" className="logoSmall" />

        <p className="titleLogin">Login</p>
        {
          this.gup('type') === 'business' &&
          this.businessLogin()
        }
        {
          this.gup('type') !== 'business' &&
          this.userLogin()
        }
        <br/>
        <div className="btnAccess" onClick={() => this.makeLogin()}>
          Entrar
        </div>
        {
          this.gup('type') === 'business' &&
          <div className="btnOrg" onClick={() => window.location.href='/login?type=user'}>
            Login como usuário?
          </div>
        }
        {
          this.gup('type') !== 'business' &&
          <span>
            <div className="btnRegister" onClick={() => window.location.href='/registerUser'}>
              Cadastrar-se
            </div>
            <div className="btnOrg" onClick={() => window.location.href='/login?type=business'}>
              Login como organização?
            </div>
          </span>
        }
        </div>
        <ToastContainer />
      </section>
    );
  }
}

export default Login;
