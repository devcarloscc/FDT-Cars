import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Componente para o menu lateral
const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/add-car">Add Car</Link></li>
      </ul>
    </div>
  );
};

// Componente para a página de login
const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Componente para a página de registro
const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Lógica de registro aqui
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

// Componente para a página de cadastro de carros
const AddCar: React.FC = () => {
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');

  const handleAddCar = () => {
    // Lógica de cadastro de carros aqui
    console.log('Car Name:', carName);
    console.log('Car Model:', carModel);
  };

  return (
    <div>
      <h2>Add Car</h2>
      <input type="text" placeholder="Car Name" value={carName} onChange={(e) => setCarName(e.target.value)} />
      <input type="text" placeholder="Car Model" value={carModel} onChange={(e) => setCarModel(e.target.value)} />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

// Componente principal
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/add-car" Component={AddCar} />
        </div>
      </div>
    </Router>
  );
};

export default App;
