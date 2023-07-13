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
import { ToastContainer, toast } from 'react-toastify';
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
      step: 0,
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
      toast.error("Erro ao recuperar dados");
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
      toast.success("Dados atualizados com sucesso");
    }).catch(function(err){
      toast.error("Erro ao atualizar dados");
    });
  }

  render() {
    return (
      <section id="UserProfilePage">
        <Header title="Home" logout={true} />

        <div className="sideLeftContent">
          <div className="contentQrCode">
            <QRCode
              size={200}
              style={{ height: "auto", maxWidth: "300px", width: "100%" }}
              value={this.state.login}
              viewBox={`0 0 200 200`}
              bgColor="#D9D9D9"
              />
          </div>
        </div>

        <div className="sideRightContent">
          <div className="contentQrCodeMini">
            <QRCode
              size={200}
              style={{ height: "auto", maxWidth: "300px", width: "100%" }}
              value={this.state.login}
              viewBox={`0 0 200 200`}
              />
          </div>
          <Accordion className="accordionCommonQuestionsComponent" preExpanded={['a']} allowMultipleExpanded={true} allowZeroExpanded>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton className="contentAccordionHeader">
                  Dados cadastrais
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="contentAccordionBody">
              <div className="contentForm" style={(this.state.step === 1?{display: "none"}:{display: "block"})}>
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
                    <input className="input" type="number" id="phone" />
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
                    <input className="input" type="text" id="maritalStatus" />
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
              </div>
              <div className="contentForm" style={(this.state.step === 0?{display: "none"}:{display: "block"})}>
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
                <div className="btnAccess" onClick={()=>{this.updateRegister()}}>
                  Atualizar
                </div>
                <div className="btnBack"  onClick={()=>{this.setState({step: 0})}}>
                  Anterior
                </div>
              </div>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton className="contentAccordionHeader">
                  Procedimentos
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
        </div>

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

        <ToastContainer />
        {
          !this.state.modalIsOpen &&
          <div className="btnGoToTop" onClick={()=>{window.scrollTo(0, 0)}}>
            <img src={require("../../assets/imgs/arrow-up.png").default} alt="Go To Top" className="imgLeft"/>
          </div>
        }
      </section>
    );
  }
}

export default UserProfile;
