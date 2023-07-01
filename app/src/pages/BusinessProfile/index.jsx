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
import IssuerServices from '../../services/IssuerServices';
import Header from '../../components/header';
import QrReader from 'modern-react-qr-reader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class BusinessProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      user: {login: ''}
    }

    this.handleError = this.handleError.bind(this);
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan = data => {
      let that = this;
      if (data) {
        this.state.result = data;
        IssuerServices.userByLogin({
          login: data
        }).then(function(res){
          that.setState({user: res.data});
          document.getElementById("did").value = res.data[1];
          that.setState({scan: false});
        }).catch(function(err){
          console.log(err);
          that.setState({scan: false});
        });
      }
  }

  handleError = err => {
    console.error(err)
  }

  makeRegister() {
    if(
      document.getElementById("name").value === '' ||
      document.getElementById("type").value === '' ||
      document.getElementById("season").value === '' ||
      document.getElementById("condition").value === '' ||
      document.getElementById("prescription").value === '' ||
      document.getElementById("did").value === '' ||
      document.getElementById("createDate").value === '' ||
      document.getElementById("doctor").value === '' ||
      document.getElementById("squad").value === '')
      return toast.error("Campos não preenchidos");

    IssuerServices.generateCredential({
      name: document.getElementById("name").value,
      type: document.getElementById("type").value,
      season: document.getElementById("season").value,
      condition: document.getElementById("condition").value,
      prescription: document.getElementById("prescription").value,
      email: this.state.user[1],
      createDate: document.getElementById("createDate").value,
      doctor: document.getElementById("doctor").value,
      squad: document.getElementById("squad").value
    }).then(function(res){
      document.getElementById("name").value = '';
      document.getElementById("type").value = '';
      document.getElementById("season").value = '';
      document.getElementById("condition").value = '';
      document.getElementById("prescription").value = '';
      document.getElementById("did").value = '';
      document.getElementById("createDate").value = '';
      document.getElementById("doctor").value = '';
      document.getElementById("squad").value = '';
      toast.success("Registro adicionado com sucesso");
    }).catch(function(err){
      toast.error("Falha ao adicionar registro");
      console.log(err);
    });
  }

  render() {
    return (
      <section id="BusinessProfilePage">
        <Header title="Home" logout={true} history={true} />

        <div className="contentQrCode">
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
        </div>

        <div className="contentForm">
          <div className="contentText">
            <h1>&bull; Nova consulta</h1>
            <p className="label">Paciente:</p>
            <input className="input" type="text" id="did" />
            <br />
            <p className="label">Status:</p>
            <input className="input" type="text" id="name" />
            <br />
            <p className="label">Tipo:</p>
            <input className="input" type="text" id="type" />
            <br />
            <p className="label">Razão:</p>
            <input className="input" type="text" id="season" />
            <br />
            <p className="label">Condição:</p>
            <input className="input" type="text" id="condition" />
            <br />
            <p className="label">Prescrição:</p>
            <input className="input" type="text" id="prescription" />
            <br />
            <p className="label">Data do atendimento:</p>
            <input className="input" type="date" id="createDate" />
            <br />
            <p className="label">Médico responsável:</p>
            <input className="input" type="text" id="doctor" />
            <br />
            <p className="label">Equipe:</p>
            <input className="input" type="text" id="squad" />
            <br /><br />
            <div className="btnAccess" onClick={()=>{this.makeRegister()}}>
              Salvar
            </div>
          </div>
        </div>
        <ToastContainer />

        <div className="btnGoToTop" onClick={()=>{window.scrollTo(0, 0)}}>
          <img src={require("../../assets/imgs/arrow-up.png").default} alt="Go To Top" className="imgLeft"/>
        </div>
      </section>
    );
  }
}

export default BusinessProfile;
