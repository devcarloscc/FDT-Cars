import { useState } from 'react';
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
  nome: z.string(),
  email: z.string().email("Insira um e-mail válido"),
  senha: z.string()
});

export function Register() {
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  const [error, setError] = useState('');

  const onSubmit = async (formData: FormData) => {
    try {
      await axios.post('http://localhost:3000/usuarios', formData);
      navigate('/login');
      alert("Uasuário cadastrado com sucesso!");
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type="text"
              placeholder="Nome"
              nome="nome"
              register={register}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="E-mail"
              nome="email"
              register={register}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Cadastre uma senha"
              nome="senha"
              register={register}
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
