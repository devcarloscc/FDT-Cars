import React, { useState } from 'react';
import ImgLogo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./register.css";
import Header from "../../components/header";
import { Input } from "../../components/input";
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
  name: z.string(),
  email: z.string().email("Insira um e-mail válido"),
  password: z.string(),
});

export function Register() {
  const navigate = useNavigate()
  const { register, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('../../../users.json', formData);
      navigate('/login');
        alert("Usuário cadastrado com sucesso!")
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setError('Erro ao cadastrar usuário');
    }
  };

  return (
    <div className="body-register">
      <section className="hd-sc">
        <Header />
      </section>
      <div className="container-register">
        <Link to="/">
          <img className="logo" src={ImgLogo} alt="Logo" />
        </Link>
        <h2 className="title-register">Registre-se</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              placeholder="Nome"
              name="name"
              register={register}
              value={formData.name}
              onchange={(event) => handleInputChange(event)}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="E-mail"
              name="email"
              register={register}
              value={formData.email}
              onchange={(event) => handleInputChange(event)}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Cadastre uma senha"
              name="password"
              register={register}
              value={formData.password}
              onchange={(event) => handleInputChange(event)}
            />
          </div>
          <button className="btn btn-warning">Cadastrar</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <span>
          <span>Já tem cadastro? </span>
          <Link to="/login">
            <span>Entrar</span>
          </Link>
        </span>
      </div>
    </div>
  );
}
