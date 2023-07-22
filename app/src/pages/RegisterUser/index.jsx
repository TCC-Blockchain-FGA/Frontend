import React from 'react';
import IssuerServices from '../../services/IssuerServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }

  makeRegister() {
    if(
      document.getElementById("login").value === '' ||
      document.getElementById("name").value === '' ||
      document.getElementById("phone").value === '' ||
      document.getElementById("password").value === '' ||
      document.getElementById("gender").value === '' ||
      document.getElementById("dateOfBirth").value === '' ||
      document.getElementById("address").value === '' ||
      document.getElementById("maritalStatus").value === '' ||
      document.getElementById("multipleBirth").value === '' ||
      document.getElementById("contactRelationship").value === '' ||
      document.getElementById("contactName").value === '' ||
      document.getElementById("contactPhone").value === '' ||
      document.getElementById("contactAddress").value === '' ||
      document.getElementById("contactGender").value === '' ||
      document.getElementById("languages").value === '' ||
      document.getElementById("preferredLanguage").value === '' ||
      document.getElementById("generalPractitioner").value === ''
    )
      return toast.error("Dados incompletos");

    IssuerServices.register({
      login: document.getElementById("login").value,
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      password: document.getElementById("password").value,
      gender: document.getElementById("gender").value,
      dateOfBirth: document.getElementById("dateOfBirth").value,
      address: document.getElementById("address").value,
      maritalStatus: document.getElementById("maritalStatus").value,
      multipleBirth: document.getElementById("multipleBirth").value,
      contactRelationship: document.getElementById("contactRelationship").value,
      contactName: document.getElementById("contactName").value,
      contactPhone: document.getElementById("contactPhone").value,
      contactAddress: document.getElementById("contactAddress").value,
      contactGender: document.getElementById("contactGender").value,
      languages: document.getElementById("languages").value,
      preferredLanguage: document.getElementById("preferredLanguage").value,
      generalPractitioner: document.getElementById("generalPractitioner").value,
    }).then(function(res){
      window.location.href = '/login';
    }).catch(function(err){
      console.log(err);
      return toast.error("Erro! Verifique as informações");
    });
  }

  render() {
   return (
    <section id="RegisterUser">
      <div className="sideLeftContent">
        <br/><br/><br/><br/>
        <img src={require("../../assets/imgs/logo.png").default} alt="Logo" className="logo" />
      </div>

      <div className="sideRightContent">
        <br/>
        <img src={require("../../assets/imgs/logo.png").default} alt="Logo" className="logoSmall" />

        <p className="titleLogin">Registro</p>
        <div className="contentForm" style={(this.state.step === 1?{display: "none"}:{display: "block"})}>
          <h1>Informações pessoais</h1>
            <div className="contentInput" style={{width: "94%"}}>
              <p className="label">Nome:</p>
              <input className="input" type="text" id="name" />
            </div>
            <div className="contentInput">
              <p className="label">Email:</p>
              <input className="input" type="text" id="login" />
            </div>
            <div className="contentInput">
              <p className="label">Senha:</p>
              <input className="input" type="password" id="password" />
            </div>
            <div className="contentInput">
              <p className="label">Telefone:</p>
              <input className="input" type="text" id="phone" />
            </div>
            <div className="contentInput">
              <p className="label">Gênero:</p>
              <select className="input" id="gender">
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>
            <div className="contentInput">
              <p className="label">Data de nascimento:</p>
              <input className="input" type="date" id="dateOfBirth" />
            </div>
            <div className="contentInput">
              <p className="label">Endereço:</p>
              <input className="input" type="text" id="address" />
            </div>
            <div className="contentInput">
              <p className="label">Estado civil:</p>
              <select className="input" id="maritalStatus">
                <option value="Solteiro">Solteiro(a)</option>
                <option value="Casado">Casado(a)</option>
                <option value="Divorciado">Divorciado(a)</option>
                <option value="Viuvo">Viúvo(a)</option>
              </select>
            </div>
            <div className="contentInput">
              <p className="label">Parto múltiplo:</p>
              <select className="input" id="multipleBirth">
                <option value="N">Não</option>
                <option value="S">Sim</option>
              </select>
            </div>
            <div className="contentInput" style={{width: "94%"}}>
              <p className="label">Idiomas:</p>
              <input className="input" type="text" id="languages" />
            </div>
            <div className="contentInput">
              <p className="label">Idioma preferido:</p>
              <input className="input" type="text" id="preferredLanguage" />
            </div>
            <div className="contentInput">
              <p className="label">Clínico geral:</p>
              <input className="input" type="text" id="generalPractitioner" />
            </div>
            <br/><br/>
            <div className="btnAccess" onClick={()=>{this.setState({step: 1})}}>
              Próximo
            </div>
            <div className="btnBack" onClick={() => window.location.href='/login'}>
              Login
            </div>
        </div>
        <div className="contentForm" style={(this.state.step === 0?{display: "none"}:{display: "block"})}>
          <h1>Contato de emergência:</h1>
            <div className="contentInput" style={{width: "94%"}}>
              <p className="label">Relação:</p>
              <input className="input" type="text" id="contactRelationship" />
            </div>
            <div className="contentInput" style={{width: "94%"}}>
              <p className="label">Nome:</p>
              <input className="input" type="text" id="contactName" />
            </div>
            <div className="contentInput" style={{width: "94%"}}>
              <p className="label">Telefone:</p>
              <input className="input" type="text" id="contactPhone" />
            </div>
            <div className="contentInput" style={{width: "94%"}}>
              <p className="label">Endereço:</p>
              <input className="input" type="text" id="contactAddress" />
            </div>
            <div className="contentInput" style={{width: "94%"}}>
              <p className="label">Gênero:</p>
              <select className="input" id="contactGender">
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>
            <br />
            <br />
          <div className="btnAccess" onClick={()=>{this.makeRegister()}}>
            Cadastrar-se
          </div>
          <div className="btnBack"  onClick={()=>{this.setState({step: 0})}}>
            Anterior
          </div>
        </div>
        <br/><br/>
        <ToastContainer />
        {
          // <div className="btnGoToTop" onClick={()=>{window.scrollTo(0, 0)}}>
          //   <img src={require("../../assets/imgs/arrow-up.png").default} alt="Go To Top" className="imgLeft"/>
          // </div>
        }
      </div>
    </section>
   );
  }
 }

export default RegisterUser;
