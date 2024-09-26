import ImgLogo from '../../assets/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import './login.css'
import { useForm } from "react-hook-form";
import { Header } from '../../components/header';
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from "react";

const schema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z.string()
})

type FormData = z.infer<typeof schema>

export function Login() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  const [erroLogin, setErroLogin] = useState('')
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/usuarios?email=${data.email}&senha=${data.password}`);
      const usuarios = response.data;
      if (usuarios.length === 1) {
        const usuario = usuarios[0];
        localStorage.setItem('usuario', JSON.stringify(usuario));
        console.log('LOGADO COM SUCESSO');
        console.log(usuario);
        navigate('/dashboard', { replace: true });
      } else {
        setErroLogin('E-mail ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErroLogin('Ocorreu um erro ao fazer login. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='cont'>
      <div className='hd'> 
        <Header />
      </div>
      <div className='div-container-login'>
        
        <div className="container-login">
          <Link to='/'>
            <img className="logo" src={ ImgLogo } alt="Logo" />
          </Link>
          <h2 className="welcome">Entre para acessar</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                nome="email"
                error={errors.email?.message}
                register={register}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Digite sua senha"
                nome="password"
                error={errors.password?.message}
                register={register}
              />
            </div>
            {erroLogin && <p className='error-message'> {erroLogin} </p>}
            <button className="btn btn-warning" disabled={loading}>
              {loading ? 'Carregando...' : 'Acessar'}
            </button>
          </form>
          <Link className="link-register" to='/register'>
            Ainda não possui uma conta? Cadastre-se aqui
          </Link>
          <footer>
            <p>FDT Cars - Todos os direitos reservados - 2024</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
