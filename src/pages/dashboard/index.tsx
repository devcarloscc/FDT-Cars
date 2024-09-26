import { useState, useEffect } from "react";
import { Carro } from "../../interfaces/Carro";
import { useNavigate } from "react-router-dom";
import CarInfo from "../../components/carsInfo/CarInfo";

export function Dashboard() {
  const [favoriteCars, setFavoriteCars] = useState<Carro[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const usuarioLogado = localStorage.getItem('usuario');
    if (!usuarioLogado) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    // Recuperar os carros favoritos do localStorage ao montar o componente
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    setFavoriteCars(favoritos);
  }, []);

  const handleRemoveFavorite = (carroId: number) => {
    // Remover o carro favorito do localStorage
    const updatedFavoritos = favoriteCars.filter((carro) => carro.id !== carroId);
    setFavoriteCars(updatedFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(updatedFavoritos));
  };

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      <h2>Meus carros favoritos:</h2>
      <div className="container-carros d-flex flex-wrap">
        {favoriteCars.map((carro: Carro) => (
          <div className="section-car mr-3 mb-3" key={carro.id}>
            <img
              className="card-img-top"
              src={carro.imagem}
              alt={carro.modelo}
            />
            <div className="card-body">
              <h5 className="card-title">{carro.modelo}</h5>
              <p className="card-text">
                Ano: {carro.ano} | Km: {carro.km}
              </p>
              <p className="card-text">
                <strong>{carro.preco}</strong>
              </p>
              <p className="card-text">{carro.localizacao}</p>
              <button className="btn btn-primary" onClick={() => handleRemoveFavorite(carro.id)}>
                Remover dos Favoritos
              </button>
              <button className="btn btn-light ">
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
