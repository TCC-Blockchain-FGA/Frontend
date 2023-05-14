import React from 'react';

class RegisterUser extends React.Component {
  render() {
   return (
    <section>
      <h1>Registro de paciente</h1>
      <form>
        <label>Nome:</label>
        <input type="text" name="name" required />
        <br />
        <label>Telefone:</label>
        <input type="number" name="phone" required />
        <br />
        <label>Gênero:</label>
        <input type="text" name="gender" required />
        <br />
        <label>Data de nascimento:</label>
        <input type="date" name="birthDate" required />
        <br />
        <label>Endereço:</label>
        <input type="text" name="address" required />
        <br />
        <label>Estado civil:</label>
        <input type="text" name="civilState" required />
        <br />
        <label>Nascimento múltiplo:</label>
        <input type="text" name="multipleBirth" required />
        <br />
        {
          // <label>Foto:</label>
          // <input type="text" name="firstname" required>
          // <br>
        }
        <h4>Contato:</h4>
        <label>Relação:</label>
        <input type="text" name="contactRelation" required />
        <br />
        <label>Nome:</label>
        <input type="text" name="contactName" required />
        <br />
        <label>Telefone:</label>
        <input type="text" name="contactPhone" required />
        <br />
        <label>Endereço:</label>
        <input type="text" name="contactAddress" required />
        <br />
        <label>Gênero:</label>
        <input type="text" name="contactGender" required />
        <br />
        <h4>Comunicação:</h4>
        <label>Idiomas:</label>
        <input type="text" name="language" required />
        <br />
        <label>Idioma preferido:</label>
        <input type="text" name="preferedLanguage" required />
        <br />
        <label>Clínico geral:</label>
        <input type="text" name="generalPractitioner" required />
        <br />
        <input type="submit" value="Registrar" />
      </form>
    </section>
   );
  }
 }

export default RegisterUser;
