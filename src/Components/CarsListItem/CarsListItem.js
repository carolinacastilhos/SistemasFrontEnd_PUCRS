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

  // const [newId, setNewId] = useState("");
  // const [newName, setNewName] = useState("");
  // const [newBrand, setNewBrand] = useState("");
  // const [newYear, setNewYear] = useState("");
  // const [newColor, setNewColor] = useState("");
  // const [editingCar, setEditingCar] = useState(null);
  // const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura do pop-up de edição

  // function deleteCar(id) {
  //   const newList = theCarList.filter((car) => car.id !== id);
  //   // Reorganiza os ids da lista após excluir um carro
  //   const updatedList = newList.map((car, index) => ({
  //     ...car,
  //     id: index + 1,
  //   }));
  //   setTheCarList(updatedList);
  // }

  // const handleCarClick = (car) => {
  //   setSelectedCar(car);
  //   setIsModalOpen(true);
  // };

  // const handleDeleteCar = (id) => {
  //   // Evitar a propagação do evento para não acionar o handleCarClick ao clicar no ícone faTrashCan
  //   deleteCar(id);
  // };

  // function editCar(c) {
  //   setEditingCar(c);
  //   setIsOpen(true); // Abrir o modal ao clicar no ícone de edição
  //   setNewId(c.id);
  //   setNewName(c.Nome);
  //   setNewBrand(c.Marca);
  //   setNewYear(c.Ano);
  //   setNewColor(c.Cor);
  // }

  // const handleEditedCar = (id) => {
  //   // Evitar a propagação do evento para não acionar o handleCarClick ao clicar no ícone faPen
  //   editCar(id);
  // };

  // function saveEditedCar() {
  //   const editedList = theCarList.map((car) =>
  //     car.id === editingCar.id
  //       ? {
  //           ...car,
  //           Nome: newName,
  //           Marca: newBrand,
  //           Ano: newYear,
  //           Cor: newColor,
  //         }
  //       : car
  //   );
  //   setTheCarList(editedList);
  //   setIsOpen(false); // Fechar o modal após salvar as alterações
  //   setNewName("");
  //   setNewBrand("");
  //   setNewYear("");
  //   setNewColor("");
  // }

  // function cancelEditing() {
  //   setIsOpen(false);
  //   setNewName("");
  //   setNewBrand("");
  //   setNewYear("");
  //   setNewColor("");
  // }

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedCar(null); // Limpa o carro selecionado quando o modal é fechado
  // };

  // return (
  //   <div className="containerList d-flex justify-content-center align-items-center flex-column m-4">
  //     <h1>Lista de Carros</h1>

  //     {theCarList.map((c) => (
  //       //está consumindo os dados da cars e transformando em uma lista visual com cada tópico
  //       <div className="row">
  //         <div
  //           className="col"
  //           onClick={() => handleCarClick(c)}
  //           style={{ cursor: "pointer" }}
  //         >
  //           <span className="px-3">
  //             {c.id}: {c.Nome}, {c.Marca}, {c.Ano}, {c.Cor}
  //           </span>
  //           <span
  //             title="edit"
  //             className="px-3"
  //             onClick={(e) => {
  //               e.stopPropagation();
  //               handleEditedCar(c.id);
  //             }}
  //             style={{ cursor: "pointer" }}
  //           >
  //             <FontAwesomeIcon icon={faPen} />
  //           </span>
  //           <span
  //             title="delete"
  //             onClick={(e) => {
  //               e.stopPropagation();
  //               handleDeleteCar(c.id);
  //             }}
  //             style={{ cursor: "pointer" }}
  //           >
  //             <FontAwesomeIcon icon={faTrashCan} />
  //           </span>
  //         </div>
  //       </div>
  //     ))}

  //     <div
  //       className={`modal fade ${isOpen ? "show" : ""}`}
  //       style={{ display: isOpen ? "block" : "none" }}
  //       tabIndex="-1"
  //       role="dialog"
  //       aria-labelledby="exampleModalCenterTitle"
  //       aria-hidden="true"
  //     >
  //       <div className="modal-dialog modal-dialog-centered" role="document">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h5 className="modal-title" id="exampleModalLongTitle">
  //               Editar Carro
  //             </h5>
  //             <button
  //               type="button"
  //               className="close"
  //               data-dismiss="modal"
  //               aria-label="Close"
  //               onClick={() => setIsOpen(false)}
  //             >
  //               <span aria-hidden="true">&times;</span>
  //             </button>
  //           </div>
  //           <div className="modal-body">
  //             {/* Inputs para editar carro */}
  //             <div className="form-group">
  //               <label>Modelo:</label>
  //               <input
  //                 type="text"
  //                 value={newName}
  //                 onChange={(e) => setNewName(e.target.value.trim())}
  //                 className="form-control"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label>Marca:</label>
  //               <input
  //                 type="text"
  //                 value={newBrand}
  //                 onChange={(e) => setNewBrand(e.target.value.trim())}
  //                 className="form-control"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label>Ano:</label>
  //               <input
  //                 type="text"
  //                 value={newYear}
  //                 onChange={(e) => setNewYear(e.target.value.trim())}
  //                 className="form-control"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label>Cor:</label>
  //               <input
  //                 type="text"
  //                 value={newColor}
  //                 onChange={(e) => setNewColor(e.target.value.trim())}
  //                 className="form-control"
  //               />
  //             </div>
  //           </div>
  //           <div className="modal-footer">
  //             <button
  //               type="button"
  //               className="btn btn-secondary"
  //               data-dismiss="modal"
  //               onClick={cancelEditing}
  //             >
  //               Cancelar
  //             </button>
  //             <button
  //               type="button"
  //               className="btn btn-primary"
  //               onClick={saveEditedCar}
  //             >
  //               Editar
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Modal do CarDetail*/}
  //     <div
  //       className={`modal fade ${isModalOpen ? "show" : ""}`}
  //       style={{ display: isModalOpen ? "block" : "none" }}
  //       tabIndex="-1"
  //       role="dialog"
  //       aria-labelledby="carDetailModal"
  //       aria-hidden={!isModalOpen}
  //       onClick={handleCloseModal}
  //     >
  //       <div className="modal-dialog" role="document">
  //         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
  //           <div className="modal-header">
  //             <h5 className="modal-title">
  //               Carro:{" "}
  //               {selectedCar && `${selectedCar.id} - ${selectedCar.Nome} `}
  //             </h5>
  //             <button
  //               type="button"
  //               className="close"
  //               data-dismiss="modal"
  //               aria-label="Close"
  //               onClick={handleCloseModal}
  //             >
  //               <span aria-hidden="true">&times;</span>
  //             </button>
  //           </div>
  //           <div className="modal-body">
  //             {selectedCar && <CarDetail car={selectedCar} />}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
