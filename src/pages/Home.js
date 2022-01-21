import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Tami's Pizzaria</h1>
        <p>Pizza to fit any taste</p>
        <Link to='/'>
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
