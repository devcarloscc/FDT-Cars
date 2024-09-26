import React from "react";
import { Carro } from "../../interfaces/Carro";

interface CarInfoProps {
  carro: Carro;
  onClose: () => void;
}

const CarInfo: React.FC<CarInfoProps> = ({ carro, onClose }) => {
  return (
    <div className="car-info">
      <h2>Informações do Carro</h2>
      <p><strong>Modelo:</strong> {carro.modelo}</p>
      <p><strong>Ano:</strong> {carro.ano}</p>
      <p><strong>Km:</strong> {carro.km}</p>
      <p><strong>Preço:</strong> {carro.preco}</p>
      <p><strong>Localização:</strong> {carro.localizacao}</p>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

export default CarInfo;
