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
import QrReader from 'modern-react-qr-reader'

class BusinessProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'No result'
    }

    this.handleError = this.handleError.bind(this);
    this.handleScan = this.handleScan.bind(this);
  }

  componentDidMount() {
  }

  handleScan = data => {
    if (data) {
      this.state.result = data;
        console.log(this.state.result);
        this.setState({result: data});
    }
  }

  handleError = err => {
    console.error(err)
  }

  updateRegister() {
    BackendServices.generateCredential({
      login: document.getElementById("login").value
    }).then(function(res){
      console.log(res);
    }).catch(function(err){
      console.log(err);
    });
  }

  render() {
    return (
      <section id="UserProfilePage">
        <Header title="Home" logout={true} />

        <QrReader
          delay={300}
          constraints={{
            facingMode: 'environment'
          }}
          key="environment"
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>

        <Accordion className="accordionCommonQuestionsComponent" allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="contentAccordionHeader">
                &bull; Novo registro de consulta
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="contentAccordionBody">
              <div className="contentForm">
                <div className="btnAccess" onClick={()=>{this.updateRegister()}}>
                  Salvar
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="contentAccordionHeader">
                &bull; Novo registro de exame
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="contentAccordionBody">
              <div className="contentForm">
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </section>
    );
  }
}

export default BusinessProfile;
