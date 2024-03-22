import React, { useState } from "react";
import cars from "../../carsData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarsListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import CarDetail from "../CarDetail/CarDetail";

export default function CarListItem() {
  const [theCarList, setTheCarList] = useState([...cars]); //Cópia da Lista de Carros do carsData
  const [selectedCar, setSelectedCar] = useState(null); // Estado para controlar qual carro está selecionado ao abrir o modal CarDetail
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar se o modal está aberto

  function deleteCar(id) {
    const newList = theCarList.filter((car) => car.id !== id);
    // Reorganiza os ids da lista após excluir um carro
    const updatedList = newList.map((car, index) => ({
      ...car,
      id: index + 1,
    }));
    setTheCarList(updatedList);
  }

  const handleCarClick = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleDeleteCar = (id) => {
    // Evitar a propagação do evento para não acionar o handleCarClick ao clicar no ícone faTrashCan
    deleteCar(id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null); // Limpa o carro selecionado quando o modal é fechado
  };

  return (
    <div className="containerList d-flex justify-content-center align-items-center flex-column m-4">
      <h1>Lista de Carros</h1>
      {theCarList.map((c) => (
        <div className="row">
          <div
            className="col"
            onClick={() => handleCarClick(c)}
            style={{ cursor: "pointer" }}
          >
            <span className="px-3">
              {c.id}: {c.Nome}, {c.Marca}, {c.Ano}, {c.Cor}
            </span>
            <span
              title="delete"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteCar(c.id);
              }}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </div>
        </div>
      ))}

      {/* Modal do CarDetail*/}
      <div
        className={`modal fade ${isModalOpen ? "show" : ""}`}
        style={{ display: isModalOpen ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="carDetailModal"
        aria-hidden={!isModalOpen}
        onClick={handleCloseModal}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5 className="modal-title">
                Carro:{" "}
                {selectedCar && `${selectedCar.id} - ${selectedCar.Nome} `}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {selectedCar && <CarDetail car={selectedCar} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
