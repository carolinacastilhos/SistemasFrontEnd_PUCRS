import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import "bootstrap/dist/css/bootstrap.min.css";

function CarFormItem() {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const { data, addCar } = useApi("http://localhost:5000/cars");
  const [errorMsg, setErrorMsg] = useState("");

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
      [name]: value.trim(),
    }));
  };

  const handleSaveClick = () => {
    if (!car.name || !car.brand || !car.year || !car.color) {
      setErrorMsg(
        "Por favor, preencha todos os campos antes de adicionar um carro."
      );
      return;
    }

    if (!/^\d{4}$/.test(car.year)) {
      setErrorMsg(
        "Por favor, digite o ano com 4 dígitos. Permitido somente números."
      );
      return;
    }

    addCar(car)
      .then(() => {
        setIsSaved(true);
        navigate("/carlist");
      })
      .catch((error) => {
        console.log(isSaved);
      });

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
            {errorMsg && (
              <div className="col alert alert-warning mt-2" role="alert">
                {errorMsg}
              </div>
            )}
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
