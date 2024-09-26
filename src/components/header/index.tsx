import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import logo from '../../assets/logo.png'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
          <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/"><img className='logo-nav' src={logo} alt="" /></Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/AddCarros">
              Cadastrar Carros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header
