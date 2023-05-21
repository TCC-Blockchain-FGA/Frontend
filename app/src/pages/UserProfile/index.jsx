/* eslint-disable */
import React from 'react';
import BackendServices from '../../services/BackendServices';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    BackendServices.userData({
      token: localStorage.getItem('token')
    }).then(function(res){
      console.log(res);
    }).catch(function(err){
      console.log(err);
    });
  }

  logout() {
    localStorage.setItem('token', '');
    window.location.href = '/';
  }

  render() {
    return (
      <section id="UserProfilePage">
        <div className="logout" onClick={()=>this.logout()}>
          Logout
        </div>
        <h2>Dados pessoais</h2>
        <h2>Registro clínico</h2>
        <h2>Permissões</h2>
      </section>
    );
  }
}

export default UserProfile;
