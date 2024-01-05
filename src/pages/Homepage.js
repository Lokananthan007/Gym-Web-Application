import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../imges/carousel-3.jpeg';
import Carousel2 from '../imges/carousel-1.jpg';
import { useNavigate } from 'react-router-dom';


function Homepage(){
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the About page
    navigate('/about');
  };
  const buttonStyle = {
    width:'200px',
    height:'80px',
    marginTop:'30px',
    fontWeight:'600',
    fontSize: '25px',
  };
  const pStyle = {
    textShadow: '1px 4px 3px rgba(138, 128, 228)',
  };
    return(
    <div className='home'>
            <Carousel fade>
      <Carousel.Item>
      <img src={Carousel1} alt="First slide" className="img-fluid" />
        <Carousel.Caption className="animated-caption">
          <h1>Welcome to Our Gym</h1>
          <h3>Lorem Ipsum</h3>
          <p style={pStyle}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button id='Button' onClick={handleButtonClick} style={buttonStyle}>Learn more</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Carousel2} alt="2nd slide" className="img-fluid" />
        <Carousel.Caption className="animated-caption">
          <h1>Transform Your Body</h1>
          <h3>Lorem Ipsum</h3>
          <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button id='Button' onClick={handleButtonClick} style={buttonStyle}>Learn more</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
    );
}
export default Homepage;