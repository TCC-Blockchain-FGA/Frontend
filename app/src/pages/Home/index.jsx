import React from 'react';
import ValidateInitialRouter from '../../utils/ValidateInitialRouter';

class Home extends React.Component {
  render() {
   return (
    <section className="mainContent">
      {
        <ValidateInitialRouter />
      }
    </section>
   );
  }
 }

export default Home;
