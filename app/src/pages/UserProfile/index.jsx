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
      modalIsOpen: false,
      type: 'issuer',
      verkey: '',
      loadScreen: false,
      step: 0,
      credentials: [
        {
            name: 'Teste',
            fields: [
              {
                name: 'Fiel 1',
                selected: false
              }
            ]
        },
        {
            name: 'Teste 2',
            fields: [
              {
                name: 'Fiel 1 - 2',
                selected: false
              }
            ]
        }
      ],
      credential: {
          name: '',
          fields: [
            {
              name: '',
              selected: false
            }
          ]
      }
    };
  }

  openModal(procedure) {
    this.setState({procedure: procedure, modalIsOpen: true, step: 0});
  }

  closeModal(that) {
    that.setState({modalIsOpen: false});
  }

  componentDidMount() {
    let that = this;
    IssuerServices.userData({
      token: localStorage.getItem('token')
    }).then(function(res){
      that.setState({verkey: res.data.verkey});

      /////////////////////////////////
      // GET CREDENTIALS

    }).catch(function(err){
      toast.error("Erro ao recuperar dados");
    });
  }

  changeCheckbox(index){
    let credential = this.state.credential;
    credential.fields[index].selected = !credential.fields[index].selected;
    this.setState({credential: credential});
  }

  registerCredential(){
    toast.success("Credencial registrada com sucesso");
    // toast.error("Erro ao registrar credencial");
  }

  sendFields(){
    toast.success("Credencial adicionada com sucesso");
    toast.error("Erro ao adicionar credencial");
  }

  render() {
    return (
      <section id="UserProfilePage">
        <Header title="Home" logout={true} />

        <div className="typeContent"><br/>
          <div onClick={() => this.setState({type: 'issuer'})} className={'btnType ' + (this.state.type === 'issuer'?'btnTypeSelected':'')}>Issuer</div>
          <div onClick={() => this.setState({type: 'verifier'})} className={'btnType ' + (this.state.type === 'verifier'?'btnTypeSelected':'')}>Verifier</div>
        </div><br/>

        {
          this.state.type === 'issuer' &&
          <div className="typeDataContent">
            <Accordion className="accordionCommonQuestionsComponent" preExpanded={['a', 'b']} allowMultipleExpanded={true} allowZeroExpanded>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton className="contentAccordionHeader">
                    Cadastrar credencial
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="contentAccordionBody">
                  <div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton className="contentAccordionHeader">
                    Conectar QRcode
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="contentAccordionBody">
                  <div className="contentQrCodeAccordion">
                    <QRCode
                      size={200}
                      style={{ height: "auto", maxWidth: "300px", width: "100%" }}
                      value={this.state.verkey}
                      viewBox={`0 0 200 200`}
                      />
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        }

        {
          this.state.type === 'verifier' &&
          <div className="typeDataContent">
            {
              this.state.credentials.length > 0 &&
              this.state.credentials.map( (credential, index) =>
                <div key={index} className="contentCredentials" onClick={()=>{
                  this.setState({credential: credential}, () => { this.setState({modalIsOpen: true})})
                }}>
                  {credential.name}
                </div>
              )
            }
          </div>
        }

        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={()=>{this.closeModal(this)}}
            contentLabel="Modal de registros"
          >
            {
              this.state.step === 0 &&
              <div className="modal">
                <h1>{this.state.credential.name}</h1>
                <div className="contentModalData">
                {
                  this.state.credential.fields.length > 0 &&
                  this.state.credential.fields.map( (field, index) =>
                    <div key={index}>
                      <input className="inputCheckbox" type="checkbox" checked={this.state.credential.fields[index].selected} onChange={(e) => {this.changeCheckbox(index)}}></input>
                      <label style={{fontSize: "14px"}}><b>&nbsp;&nbsp;Marcar todas as opções.</b></label><br/><br/>
                    </div>
                  )
                }
                </div>
                <div className="btnClose" onClick={()=>{this.closeModal(this)}}>
                  <img src={require("../../assets/imgs/close.png").default} alt="Go To Top" className="imgLeft"/>
                </div>

                <div className="btnAccess" onClick={() => {
                    let that = this;
                    this.setState({step: 1});
                    setTimeout(
                      () => this.setState({ loadScreen: true }),
                      2000
                    );
                    setTimeout(
                      () => {
                        this.setState({ loadScreen: false });
                        that.registerCredential();
                      },
                      7000
                    );
                  }}
                >
                  Próximo
                </div>
              </div>
            }

            {
              this.state.step === 1 &&
              <div className="modal">
                <div className="contentModalData">
                  <h1>{this.state.credential.name}</h1><br/>
                  <div className="contentQrCodeAccordion">
                    <QRCode
                      size={200}
                      style={{ height: "auto", maxWidth: "300px", width: "100%" }}
                      value={this.state.verkey}
                      viewBox={`0 0 200 200`}
                      />
                  </div>
                </div>

                <div className="btnBack" onClick={() => this.setState({step: 0})}>
                  Anterior
                </div>
              </div>
            }
        </Modal>

        <ToastContainer />
        {
          !this.state.modalIsOpen &&
          <div className="btnGoToTop" onClick={()=>{window.scrollTo(0, 0)}}>
            <img src={require("../../assets/imgs/arrow-up.png").default} alt="Go To Top" className="imgLeft"/>
          </div>
        }

        {
            this.state.loadScreen &&
            <div className="load">
              <img src={require("../../assets/imgs/load.gif").default} alt="Loading" className="imgLoad"/>
              <div className="btnBack" onClick={() => this.setState({loadScreen: false})}>
                Cancelar
              </div>
            </div>
        }
      </section>
    );
  }
}

export default UserProfile;
