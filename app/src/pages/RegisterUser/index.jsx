import React from 'react';
import BackendServices from '../../services/BackendServices';
import Header from '../../components/header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class RegisterUser extends React.Component {

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

    BackendServices.register({
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
      <Header title="Cadastro" logout={false} />
      <div className="contentForm">
        <h1>&bull; Informações pessoais</h1>
          <p className="label">Nome:</p>
          <input className="input" type="text" id="name" />
          <br />
          <p className="label">Email:</p>
          <input className="input" type="text" id="login" />
          <br />
          <p className="label">Senha:</p>
          <input className="input" type="password" id="password" />
          <br />
          <p className="label">Telefone:</p>
          <input className="input" type="number" id="phone" />
          <br />
          <p className="label">Gênero:</p>
          <input className="input" type="text" id="gender" />
          <br />
          <p className="label">Data de nascimento:</p>
          <input className="input" type="date" id="dateOfBirth" />
          <br />
          <p className="label">Endereço:</p>
          <input className="input" type="text" id="address" />
          <br />
          <p className="label">Estado civil:</p>
          <input className="input" type="text" id="maritalStatus" />
          <br />
          <p className="label">Nascimento múltiplo:</p>
          <input className="input" type="text" id="multipleBirth" />
          <br />
          <p className="label">Idiomas:</p>
          <input className="input" type="text" id="languages" />
          <br />
          <p className="label">Idioma preferido:</p>
          <input className="input" type="text" id="preferredLanguage" />
          <br />
          <p className="label">Clínico geral:</p>
          <input className="input" type="text" id="generalPractitioner" />
        <h1>&bull; Contato de emergência:</h1>
          <p className="label">Relação:</p>
          <input className="input" type="text" id="contactRelationship" />
          <br />
          <p className="label">Nome:</p>
          <input className="input" type="text" id="contactName" />
          <br />
          <p className="label">Telefone:</p>
          <input className="input" type="text" id="contactPhone" />
          <br />
          <p className="label">Endereço:</p>
          <input className="input" type="text" id="contactAddress" />
          <br />
          <p className="label">Gênero:</p>
          <input className="input" type="text" id="contactGender" />
          <br />
      </div>
          <br />
      <div className="btnAccess" onClick={()=>{this.makeRegister()}}>
        Cadastrar-se
      </div>
      <div className="btnBack" onClick={() => window.location.href='/login'}>
        Login
      </div>
      <br/><br/>
      <ToastContainer />
      <div className="btnGoToTop" onClick={()=>{window.scrollTo(0, 0)}}>
        <img src={require("../../assets/imgs/arrow-up.png").default} alt="Go To Top" className="imgLeft"/>
      </div>
    </section>
   );
  }
 }

export default RegisterUser;
