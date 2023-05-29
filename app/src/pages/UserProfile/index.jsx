/* eslint-disable */
import React from 'react';
import BackendServices from '../../services/BackendServices';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  componentDidMount() {
    let that = this;
    BackendServices.userData({
      token: localStorage.getItem('token')
    }).then(function(res){
      that.setState({id: res.data.id});
      document.getElementById("login").value = res.data.login;
      document.getElementById("name").value = res.data.name;
      document.getElementById("phone").value = res.data.phone;
      document.getElementById("gender").value = res.data.gender;
      document.getElementById("dateOfBirth").value = res.data.dateOfBirth;
      document.getElementById("address").value = res.data.address;
      document.getElementById("maritalStatus").value = res.data.maritalStatus;
      document.getElementById("multipleBirth").value = res.data.multipleBirth;
      document.getElementById("contactRelationship").value = res.data.contactRelationship;
      document.getElementById("contactName").value = res.data.contactName;
      document.getElementById("contactPhone").value = res.data.contactPhone;
      document.getElementById("contactAddress").value = res.data.contactAddress;
      document.getElementById("contactGender").value = res.data.contactGender;
      document.getElementById("languages").value = res.data.languages;
      document.getElementById("preferredLanguage").value = res.data.preferredLanguage;
      document.getElementById("generalPractitioner").value = res.data.generalPractitioner;
    }).catch(function(err){
      console.log(err);
    });
  }

  logout() {
    localStorage.setItem('token', '');
    window.location.href = '/';
  }

  updateRegister() {
    BackendServices.updateRegister({
      id: this.state.id,
      login: document.getElementById("login").value,
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
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
      alert('Dados atualizados!');
    }).catch(function(err){
      console.log(err);
    });
  }

  render() {
    return (
      <section id="UserProfilePage">
        <div className="logout" onClick={()=>this.logout()}>
          Logout
        </div>
        <h2>Dados pessoais</h2>
        <label className="label">Nome:</label>
        <input className="input" type="text" id="name" />
        <br />
        <label className="label">Email:</label>
        <input className="input" type="text" id="login" />
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
        <div className="btnAccess" onClick={()=>{this.updateRegister()}}>
          Atualizar
        </div>
        <h2>Registro clínico</h2>
        <h2>Permissões</h2>
      </section>
    );
  }
}

export default UserProfile;
