/* eslint-disable */
import React from 'react';

class BusinessProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('login', '');
    window.location.href = '/';
  }

  render() {
    return (
      <section id="BusinessProfilePage">
        <div className="logout" onClick={()=>this.logout()}>
          Logout
        </div>
        <h2>Novo procedimento</h2>
        <h2>Registro clínico</h2>
        <h2>Permissões</h2>
      </section>
    );
  }
}

export default BusinessProfile;
