
import '../components/Service.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Service1 from '../imges/service1.jpeg';
import Service2 from '../imges/service2.jpeg';
import Service3 from '../imges/service3.jpeg';
import {useNavigate} from 'react-router-dom';

function Service(){
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the home page
    navigate('/homepage');
  };
  const buttonStyle = {
    width: '250px',
    height: '65px',
    fontWeight: '300',
    fontSize: '20px',
    marginBottom: '30px',
  };
    return(
        <div id='service'>
          <div className='row'>
            <h1>SERIVICE</h1>
          </div>            
          <div className='row'>
          <CardGroup>
      <Card>
        <img src={Service1} variant="top"  className="img-fluid"  alt='1st' />
        <Card.Body>
          <Card.Title>BODY BUILDING</Card.Title>
          <Card.Text>
          Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor
          amet kasd elitr duo vero amet amet stet
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <img src={Service2} variant="top"  className="img-fluid"  alt='2nd' />
        <Card.Body>
          <Card.Title>WEIGHT LEFTING</Card.Title>
          <Card.Text>
          Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr 
          dolor amet kasd elitr duo vero amet amet stet
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <img src={Service3} variant="top"  className="img-fluid"  alt='3ed' />
        <Card.Body>
          <Card.Title>MUSCLE BUILDING</Card.Title>
          <Card.Text>
          Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor
          amet kasd elitr duo vero amet amet stet
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
          </div>
          <div className='row'>
            <h3>30% DISCOUNT FOR THIS SUMMER</h3>
            <button id='Button' onClick={handleButtonClick} style={{ ...buttonStyle }}>
            become a member
            </button>
          </div>                
        </div>
    );
}
export default Service;