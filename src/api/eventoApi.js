import axios from 'axios';

const API_URL = 'http://localhost:8080/api/eventos';

export const getEventos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const criarEvento = async (evento) => {
  const response = await axios.post(API_URL, evento);
  return response.data;
};

export const atualizarEvento = async (id, evento) => {
  const response = await axios.put(`${API_URL}/${id}`, evento);
  return response.data;
};

export const deletarEvento = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
