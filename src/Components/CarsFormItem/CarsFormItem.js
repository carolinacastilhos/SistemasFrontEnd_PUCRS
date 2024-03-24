import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import "bootstrap/dist/css/bootstrap.min.css";

function CarFormItem() {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const { data, addCar } = useApi("http://localhost:5000/cars");

  const [car, setCar] = useState(
    data || {
      name: "",
      brand: "",
      color: "",
      year: "",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar((prevState) => ({
      ...prevState,
      id: new Date().valueOf(),
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    addCar(car)
      .then(() => {
        setIsSaved(true);
        navigate("/carlist");
      })
      .catch((error) => {
        console.log(isSaved);
      });

    setIsSaved(true);
    navigate("/carlist");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <div className="containerCars m-4">
        <h1>Adicionar Carro</h1>

        <div className="row">
          <div className="col">
            {/* Campo para adicionar o Modelo do carro */}
            <div>
              <label>Modelo: </label>
              <input
                type="text"
                name="name"
                value={car.name}
                onChange={handleInputChange}
                className="form-control form-control-lg"
              />
            </div>
            {/* Campo para adicionar a Marca do carro */}
            <div>
              <label>Marca: </label>
              <input
                type="text"
                name="brand"
                value={car.brand}
                onChange={handleInputChange}
                className="form-control form-control-lg"
              />
            </div>
            {/* Campo para adicionar o ano do carro */}
            <div>
              <label>Ano: </label>
              <input
                type="text"
                name="year"
                value={car.year}
                onChange={handleInputChange}
                className="form-control form-control-lg"
              />
            </div>
            {/* Campo para adicionar a cor do carro */}
            <div>
              <label>Cor: </label>
              <input
                type="text"
                name="color"
                value={car.color}
                onChange={handleInputChange}
                className="form-control form-control-lg"
              />
            </div>
            {/* {errorMsg && (
              <div className="col alert alert-warning mt-2" role="alert">
                {errorMsg}
              </div>
            )} */}
          </div>

          {/* Botão para adicionar o carro na lista */}
          <div className="row-auto d-flex justify-content-center mt-2">
            <button onClick={handleSaveClick} className="btn btn-lg btn-dark">
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarFormItem;

// const [theCarList, setTheCarList] = useState([...cars]); //Cópia da Lista de Carros do carsData
// const [newId, setNewId] = useState("");
// const [newName, setNewName] = useState("");
// const [newBrand, setNewBrand] = useState("");
// const [newYear, setNewYear] = useState("");
// const [newColor, setNewColor] = useState("");
// const [editingCar, setEditingCar] = useState(null);
// const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura do pop-up de edição
// const [errorMsg, setErrorMsg] = useState(""); // Estado para controlar a mensagem de validação

// Verificação se todos os campos estão preenchidos antes de adicionar o carro
// if (!newName || !newBrand || !newYear || !newColor) {
//   setErrorMsg(
//     "Por favor, preencha todos os campos antes de adicionar um carro."
//   );
//   return;
// }
// if (!/^\d{4}$/.test(newYear)) {
//   setErrorMsg(
//     "Por favor, digite o ano com 4 dígitos. Permitido somente números."
//   );
//   return;
// }
// let newCarId = 1; // Definir o novo ID como 1 por padrão
// if (theCarList.length > 0) {
//   // Se houver carros na lista, encontrar o maior ID atualmente na lista e adicionar 1
//   const maxId = Math.max(...theCarList.map((car) => car.id));
//   newCarId = maxId + 1;
// }
// const newCar = {
//   id: newCarId,
//   Nome: newName,
//   Marca: newBrand,
//   Ano: newYear,
//   Cor: newColor,
// };
// setTheCarList([...theCarList, newCar]);
// // Limpar a mensagem de erro após adicionar o carro com sucesso
// setErrorMsg("");
// // para que os campos de input fiquem vazios após a inserção do novo carro na lista:
// setNewName("");
// setNewBrand("");
// setNewYear("");
// setNewColor("");

// function deleteCar(id) {
//   const newList = theCarList.filter((car) => car.id !== id);
//   // Reorganiza os ids da lista após excluir um carro
//   const updatedList = newList.map((car, index) => ({
//     ...car,
//     id: index + 1,
//   }));
//   setTheCarList(updatedList);
//   setNewName("");
//   setNewBrand("");
//   setNewYear("");
//   setNewColor("");
// }

// function editCar(c) {
//   setEditingCar(c);
//   setIsOpen(true); // Abrir o modal ao clicar no ícone de edição
//   setNewId(c.id);
//   setNewName(c.Nome);
//   setNewBrand(c.Marca);
//   setNewYear(c.Ano);
//   setNewColor(c.Cor);
// }

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

{
  /* Visualização da Lista de carros
      <div className="containerList">
        <h1>Lista de Carros</h1>
        {theCarList.map((c) => (
          //está consumindo os dados da cars e transformando em uma lista visual com cada tópico

          <div className="row">
            <div className="col">
              <span className="px-3">
                {c.id}: {c.Nome}, {c.Marca}, {c.Ano}, {c.Cor}
              </span>
              <span
                title="edit"
                className="px-3"
                onClick={() => editCar(c)}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faPen} />
              </span>
              <span
                title="delete"
                onClick={() => deleteCar(c.id)}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
        ))}
      </div> */
}

{
  /* <div
        className={`modal fade ${isOpen ? "show" : ""}`}
        style={{ display: isOpen ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Editar Carro
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body"> */
}

{
  /* Inputs para editar carro */
}
{
  /* <div className="form-group">
                <label>Modelo:</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value.trim())}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Marca:</label>
                <input
                  type="text"
                  value={newBrand}
                  onChange={(e) => setNewBrand(e.target.value.trim())}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Ano:</label>
                <input
                  type="text"
                  value={newYear}
                  onChange={(e) => setNewYear(e.target.value.trim())}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Cor:</label>
                <input
                  type="text"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value.trim())}
                  className="form-control"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={cancelEditing}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveEditedCar}
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </div> */
}
