import axios from "axios";

const useApi = () => {
  const getAllCars = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cars/`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  //   const updateCar = async (postcard) => {
  //   try {
  //     await axios.put(`http://localhost:5000/cars/${car.id}`, car);
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // };

  const addCar = async (car) => {
    try {
      const response = await axios.post(`http://localhost:5000/cars/`, car);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${parseInt(id)}`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { getAllCars, addCar, deleteCar };
};

export default useApi;
