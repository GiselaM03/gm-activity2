import React from 'react'; 
import { useNavigate} from 'react-router-dom';
import { Button } from './Button'; 
import '../App.css'; 
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/destinations');
  };

  const handleGalleryClick = () => {
    navigate('/about'); 
  };
  
  return (
    <div className="hero-container">
      <h1>Welcome to Like you Love it Travel</h1>
      <p1>Let's create your dreamed trip</p1>
      <p2>We are here to make it come true!</p2>

      <div className='hero-btns'>
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => window.location.href = '/sign-up'}
        >
          WHO WE ARE
        </Button>
        <Button 
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => window.location.href = '/destinations'}
        >
          GALLERY  
        </Button>
      </div> 
    </div>
  );
};

export default Hero;
