import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPost = async (id: number) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};
