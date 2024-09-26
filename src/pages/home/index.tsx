import { useState, useEffect } from "react";
import axios from "axios";
import { Carro } from "../../interfaces/Carro";
import imgChave from '../../assets/img-sonho.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css'
import Video from "../../components/video/Video";
import { Footer } from "../../components/footer";

export function Home() {
  const [carros, setCarros] = useState<Carro[]>([]);
  const [usuarioLogado, setUsuarioLogado] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<Carro[]>("http://localhost:3000/carros/")
      .then((response) => {
        setCarros(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados", error);
      });

    // Verificar se o usuário está logado
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      setUsuarioLogado(true);
    } else {
      setUsuarioLogado(false);
    }
  }, []);

  const handleFavoritar = (carro: Carro) => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    
    // Verificar se o carro já está nos favoritos
    const carroExistente = favoritos.find((c: Carro) => c.id === carro.id);
    if (carroExistente) {
      alert("Este carro já está nos favoritos!");
      return;
    }
    
    // Adicionar o carro aos favoritos
    const updatedFavoritos = [...favoritos, carro];
    localStorage.setItem('favoritos', JSON.stringify(updatedFavoritos));
    alert("Carro favoritado!");
  };

  return (
    <div>
      <section className="container-total">
        <section className="container-search">
          <h4>
            <span>Aqui </span>
            você encontra veículos novos e usados
          </h4>
          <p className="text-home">
            Encontre veículos de diversas marcas. Abaixo, pesquise por modelo ou
            marca
          </p>
          <button className=" button-busca btn btn-warning" type="button">
            Buscar
          </button>
        </section>
        <section className="div-img-chave img-chave-container">
          <img className="img-chave" src={imgChave} alt="" />
        </section>
      </section>
      <h2 className="title-section-carros">
        Carros novos e usados em todo Ceará
      </h2>
      <main className="container-carros">
        <div className="body-home">
          {carros.map((carro, index) => (
            <section id="nossos-carros" className="section-car" key={index}>
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
                <i className="bi bi-geo-alt-fill"></i>
                {usuarioLogado && (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleFavoritar(carro)}
                  >
                    Favoritar
                  </button>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      <hr />

      <main>
        <h2></h2>
        <section className="como-escolher-usado">
          <div>
            <Video videoId="Q6o3V9xs0xU" />
          </div>
          <div className="div-title-video">
            <p className="title-video">
              <span>Veja como </span>
              escolher o seu usado
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
