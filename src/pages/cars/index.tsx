import { useState, useEffect } from "react";
import axios from "axios";
import './CadastroCarros.css'
import { useNavigate } from "react-router-dom";

interface CadastroCarroProps {
  onCadastroSucesso: () => void;
}

export function CadastroCarro({ onCadastroSucesso }: CadastroCarroProps) {
  
  const navigate = useNavigate()

  useEffect(() => {
    const usuarioLogado = localStorage.getItem('usuario');
    if (!usuarioLogado) {
      navigate('/login');
    }
  }, [navigate]);
  
  
  const [imagem, setImagem] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [km, setKm] = useState("");
  const [preco, setPreco] = useState("");
  const [localizacao, setLocalizacao] = useState("");

  const handleCadastro = async () => {
    // Gerar um id aleatório
    const id = Math.floor(Math.random() * 1000);

    // Dados do novo carro
    const novoCarro = {
      id,
      modelo,
      ano,
      km,
      preco,
      localizacao,
      imagem
    };

    try {
      await axios.post("http://localhost:3000/carros", novoCarro);
      
      onCadastroSucesso();
      
    } catch (error) {
      console.error("Erro ao cadastrar carro:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="title-cadastro">Cadastro de Carro</h2>
      <form className="formulario">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            placeholder="URL da Imagem"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            placeholder="Modelo"
          />
          <input
            type="text"
            className="form-control"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            placeholder="Ano"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={km}
            onChange={(e) => setKm(e.target.value)}
            placeholder="Km"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Preço"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            placeholder="Localização"
          />
        </div>
        <button type="button" className="btn btn-primary botao-cadastro-carros" onClick={handleCadastro}>Cadastrar</button>
      </form>
    </div>
  );
}
