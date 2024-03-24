import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError("Erro ao carregar os dados.");
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useApi;
