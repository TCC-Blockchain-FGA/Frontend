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
import BackendServices from '../../services/BackendServices';
import Header from '../../components/header';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      procedures: [
        {
          name: "Procedimento 1",
        },
        {
          name: "Procedimento 2",
        },
        {
          name: "Procedimento 3",
        }
      ]
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
        <Header title="Home" logout={true} />

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
                  this.state.procedures.map((procedure) =>
                    <div className="contentProcedure" key={procedure.name}>
                      {procedure.name}
                    </div>
                  )
                }
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </section>
    );
  }
}

export default UserProfile;
