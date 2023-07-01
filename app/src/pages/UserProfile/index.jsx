/* eslint-disable */
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Modal from 'react-modal';
import IssuerServices from '../../services/IssuerServices';
import Header from '../../components/header';
import QRCode from "react-qr-code";

Modal.setAppElement('#root');

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      login: '',
      procedures: [],
      procedure: '',
      modalIsOpen: false,
    };
  }

  openModal(procedure) {
    this.setState({procedure: procedure, modalIsOpen: true});
  }

  closeModal(that) {
    that.setState({modalIsOpen: false});
  }

  componentDidMount() {
    let that = this;
    IssuerServices.userData({
      token: localStorage.getItem('token')
    }).then(function(res){
      IssuerServices.getCredentials({email: res.data.login}).then(function(res){
        if(res.data !== null)
          that.setState({procedures: res.data});
      }).catch(function(err){
        console.log(err);
      });
      that.setState({id: res.data.id, login: res.data.login});
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

  updateRegister() {
    IssuerServices.updateRegister({
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
        <Header title="Home" logout={true} />

        <div className="contentQrCode">
          <QRCode
            size={200}
            style={{ height: "auto", maxWidth: "300px", width: "100%" }}
            value={this.state.login}
            viewBox={`0 0 200 200`}
            />
        </div>

        <Accordion className="accordionCommonQuestionsComponent" allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="contentAccordionHeader">
                &bull; Dados cadastrais
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="contentAccordionBody">
              <div className="contentForm">
              <h1>&bull; Informações pessoais:</h1>
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
                <br /><br />
                <div className="btnAccess" onClick={()=>{this.updateRegister()}}>
                  Salvar
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="contentAccordionHeader">
                &bull; Procedimentos
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="contentAccordionBody">
              <div className="contentForm">
                {
                  this.state.procedures.length > 0 &&
                  this.state.procedures.map((procedure) =>
                    <div className="contentProcedure" key={procedure[0]} onClick={()=>{this.openModal(procedure)}}>
                      {procedure[0]} - {procedure[1]}
                    </div>
                  )
                }
                {
                  this.state.procedures.length === 0 &&
                  <div>
                    <h3>Sem registros!</h3>
                  </div>
                }
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={()=>{this.closeModal(this)}}
            contentLabel="Modal de registros"
          >
            <div className="modal">
              <h1>Registro clínico</h1>
              <label>Status:</label>
              <p>{this.state.procedure[1]}</p>
              <label>Tipo:</label>
              <p>{this.state.procedure[2]}</p>
              <label>Razão:</label>
              <p>{this.state.procedure[3]}</p>
              <label>Condição:</label>
              <p>{this.state.procedure[4]}</p>
              <label>Prescrição:</label>
              <p>{this.state.procedure[5]}</p>
              <label>Paciente:</label>
              <p>{this.state.procedure[6]}</p>
              <label>Data do atendimento:</label>
              <p>{this.state.procedure[7]}</p>
              <label>Médico Responsável:</label>
              <p>{this.state.procedure[8]}</p>
              <label>Equipe:</label>
              <p>{this.state.procedure[9]}</p>
              <div className="btnClose" onClick={()=>{this.closeModal(this)}}>
                <img src={require("../../assets/imgs/close.png").default} alt="Go To Top" className="imgLeft"/>
              </div>
            </div>
        </Modal>

        <div className="btnGoToTop" onClick={()=>{window.scrollTo(0, 0)}}>
          <img src={require("../../assets/imgs/arrow-up.png").default} alt="Go To Top" className="imgLeft"/>
        </div>
      </section>
    );
  }
}

export default UserProfile;
