import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../imges/Logo.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Menubar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the contact page
    navigate('/contact');
  };

  return (
    <div>
      <Navbar className="navbar" fixed='top' expand="lg" data-bs-theme="dark">
        <Navbar.Brand href="/">
          <img src={Logo} alt='logo' />
          AP GYM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-5' />

        {/* Move the button inside Navbar.Collapse and use Bootstrap classes for positioning */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link href="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Nav.Link>
            <Nav.Link href="/service" className={location.pathname === '/service' ? 'active' : ''}>Service</Nav.Link>
            <Nav.Link href="/class" className={location.pathname === '/class' ? 'active' : ''}>Class</Nav.Link>
            <Nav.Link href="/team" className={location.pathname === '/team' ? 'active' : ''}>Team</Nav.Link>
            <Nav.Link href="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Nav.Link>
          </Nav>
          <button id='Button' onClick={handleButtonClick} className="me-3">join us</button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menubar;
