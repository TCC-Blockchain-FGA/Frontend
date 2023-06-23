/* eslint-disable */
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Modal from 'react-modal';
import 'react-accessible-accordion/dist/fancy-example.css';
import BackendServices from '../../services/BackendServices';
import Header from '../../components/header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

class Historic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    BackendServices.getCredentials({email: ""}).then(function(res){
      that.setState({procedures: res.data});
    }).catch(function(err){
      console.log(err);
      toast.error("Erro ao carregar registros");
    });
  }

  render() {
    return (
      <section id="HistoricPage">
        <Header title="Histórico" close={true} />
        <div className="contentForm">
          <div className="contentText">
            {
              this.state.procedures.map((procedure) =>
                <div className="contentProcedure" key={procedure[0]} onClick={()=>{this.openModal(procedure)}}>
                  {procedure[0]} - {procedure[1]}
                </div>
              )
            }
          </div>
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

export default Historic;
