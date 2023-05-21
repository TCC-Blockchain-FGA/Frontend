import React from 'react';

class Home extends React.Component {
  render() {
   return (
    <section id="HomePage"><br/><br/><br/>
      <a href="/login?type=business">
        <div className="contentOption">
          <img src={require("../../assets/imgs/enterprise.png").default} alt="Enterprise Icon" className="imgOption"/>
          <p className="pLabel">Acesso de organizações</p>
        </div>
      </a>
      <a href="/login?type=user">
        <div className="contentOption">
          <img src={require("../../assets/imgs/user.png").default} alt="User Icon" className="imgOption"/>
          <p className="pLabel">Acesso de usuários</p>
        </div>
      </a>
    </section>
   );
  }
 }

export default Home;
