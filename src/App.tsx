import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { Dashboard } from './pages/dashboard'
import { CadastroCarro } from './pages/cars'
import { NewDashboard } from './pages/dashboard/new'

import { Layout } from './components/layouts'


const handleFavoritadoSucesso = () => {

  alert("Carro Favoritado com sucesso!");
};


const handleCadastroSucesso = () => {

  alert("Carro cadastrado com sucesso!");
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home onFavoritar={handleFavoritadoSucesso}/>,
      },
      {
        path: '/AddCarros',
        element: <CadastroCarro onCadastroSucesso={handleCadastroSucesso}/>,
      },
      {
        path: '/dashboard',
        element: <Dashboard history={''} onFavoritar={handleCadastroSucesso}/>,
      },
      {
        path: '/dashboard/new',
        element: <NewDashboard />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])