import axios from 'axios';

export async function getQuestions(serviceId) {
  const res = await axios.get(`/api/questions/${serviceId}`);

  return res.data;
}
