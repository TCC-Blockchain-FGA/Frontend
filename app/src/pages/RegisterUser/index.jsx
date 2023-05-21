import React from 'react';
import BackendServices from '../../services/BackendServices';

class RegisterUser extends React.Component {

  makeRegister() {
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
    });
  }

  render() {
   return (
    <section id="RegisterUser">
      <h1>Registro de paciente</h1>
        <label className="label">Nome:</label>
        <input className="input" type="text" id="name" />
        <br />
        <label className="label">Email:</label>
        <input className="input" type="text" id="login" />
        <br />
        <label className="label">Senha:</label>
        <input className="input" type="password" id="password" />
        <br />
        <label className="label">Telefone:</label>
        <input className="input" type="number" id="phone" />
        <br />
        <label className="label">Gênero:</label>
        <input className="input" type="text" id="gender" />
        <br />
        <label className="label">Data de nascimento:</label>
        <input className="input" type="date" id="dateOfBirth" />
        <br />
        <label className="label">Endereço:</label>
        <input className="input" type="text" id="address" />
        <br />
        <label className="label">Estado civil:</label>
        <input className="input" type="text" id="maritalStatus" />
        <br />
        <label className="label">Nascimento múltiplo:</label>
        <input className="input" type="text" id="multipleBirth" />
        <br />
        <h4>Contato:</h4>
        <label className="label">Relação:</label>
        <input className="input" type="text" id="contactRelationship" />
        <br />
        <label className="label">Nome:</label>
        <input className="input" type="text" id="contactName" />
        <br />
        <label className="label">Telefone:</label>
        <input className="input" type="text" id="contactPhone" />
        <br />
        <label className="label">Endereço:</label>
        <input className="input" type="text" id="contactAddress" />
        <br />
        <label className="label">Gênero:</label>
        <input className="input" type="text" id="contactGender" />
        <br />
        <h4>Comunicação:</h4>
        <label className="label">Idiomas:</label>
        <input className="input" type="text" id="languages" />
        <br />
        <label className="label">Idioma preferido:</label>
        <input className="input" type="text" id="preferredLanguage" />
        <br />
        <label className="label">Clínico geral:</label>
        <input className="input" type="text" id="generalPractitioner" />
        <br />
        <div className="btnBack" onClick={() => window.location.href='/login'}>
          Voltar
        </div>
        <div className="btnAccess" onClick={()=>{this.makeRegister()}}>
          Cadastrar-se
        </div>
        <br/><br/>
    </section>
   );
  }
 }

export default RegisterUser;
