import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { FormattedMessage } from 'react-intl';

import Layout from './Layout/Layout';

function App() {
    return (
  <div className="App">
        <Layout />
      </div>
    );
}


  /**
  <div>
    <Container className='p-3'>
      <Jumbotron>
        <h1 className='header'>
          <FormattedMessage id='Home.Title' defaultMessage='Welcome to Crop Darpan Application..' />
        </h1>
      </Jumbotron>
    </Container>

    
    <Container className='d-flex align-items-center-justify-content-center'
    style={{minHeight:"100vh"}}
    >
    <SignUp />
    </Container>
    </div >
    **/





export default App;
