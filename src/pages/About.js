import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Aboutimg from '../imges/about.jpeg';
import '../components/About.css';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the home page
    navigate('/service');
  };
  const buttonStyle = {
    width: '200px',
    height: '80px',
    marginTop: '30px',
    fontWeight: '600',
    fontSize: '25px',
  };

  const colRef = React.useRef(null);

  const [imageProps, setImage] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-100%)',
    config: {
      duration: 1500,
    },
  }));

  const [textProps, setText] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(100%)',
    config: {
      duration: 1500,
    },
  }));

  
  useEffect(() => {
    const handleScroll = () => {
      const rect = colRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight - 100;

      if (rect.top < triggerPoint) {
        // Update the animated values using set functions
        setImage({ opacity: 1, transform: 'translateX(0)' });
        setText({ opacity: 1, transform: 'translateX(0)' });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [colRef, setImage, setText]);

  return (
    <div id='about'>
      <div className='row'>
        <animated.div className='col' style={imageProps}>
          <img src={Aboutimg} alt='About img' />
        </animated.div>
        <animated.div className='col' ref={colRef} style={textProps}>
          <h3>ABOUT US</h3>
          <h1>Make yourself stronger than your best excuses</h1>
          <p>
            Donec porttitor, dui ac molestie aliquam, sem massa aliquam justo,
            ac pellentesque tortor libero quis tellus. In tristique placerat
            ante, vel interdum eros egestas a. Phasellus eget varius diam, sed
            aliquam massa. Suspendisse sed ante et mi feugiat pulvinar
            vestibulum id enim. Donec vehicula iaculis commodo. Phasellus leo
            risus, gravida nec luctus et, pharetra vel lorem. 
          </p>
          <button id='Button'  onClick={handleButtonClick} style={{ ...buttonStyle }}>
            Learn more
          </button>
        </animated.div>
      </div>
    </div>
  );
}

export default About;
