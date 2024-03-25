import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import CarDetail from "../CarDetail/CarDetail";
import useApi from "../../Hooks/useApi";
import { Link } from "react-router-dom";

export default function CarListItem() {
  const { getAllCars, deleteCar } = useApi();
  const [selectedCar, setSelectedCar] = useState(null); // Estado para controlar qual carro está selecionado ao abrir o modal CarDetail
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar se o modal está aberto
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCars();
        setCars(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching cars:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteCar = async (id) => {
    try {
      await deleteCar(id);
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (error) {
      console.log("Error deleting car:", error);
    }
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null); // Limpa o carro selecionado quando o modal é fechado
  };

  return (
    <div className="containerList d-flex justify-content-center align-items-center flex-column m-4">
      <h1>Lista de Carros</h1>
      <div className="card">
        <ul className="list-group list-group-flush">
          {cars.map((c) => (
            <li className="list-group-item" key={c.id}>
              <span
                onClick={() => handleCarClick(c)}
                style={{ cursor: "pointer" }}
              >
                <b>{c.name}:</b> {c.brand}, {c.color}, {c.year}
              </span>
              {/* <span
                title="edit"
                className="px-3"
                // onClick={(e) => {
                //   e.stopPropagation();
                //   handleEditedCar(c.id);
                // }}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faPen} />
              </span> */}
              <span
                title="delete"
                className="px-3"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteCar(c.id);
                }}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Botão para adicionar um carro na lista */}
      <div className="row-auto d-flex justify-content-center mt-2">
        <Link to="/carform" className="btn btn-lg btn-dark">
          Adicionar <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>

      {/* Modal do CarDetail */}
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
                {selectedCar && `${selectedCar.id} - ${selectedCar.name} `}
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
