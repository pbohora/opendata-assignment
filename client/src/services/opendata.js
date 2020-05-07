import axios from 'axios';

const baseUrl = '/api/data';

const getOpenData = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export { getOpenData };
