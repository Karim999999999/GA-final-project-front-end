import axios from 'axios';

export const loginUser = (credentials) =>
  axios
    .request({
      method: 'POST',
      url: 'http://localhost:8000/authentication/login/',
      data: credentials,
    })
    .then(({ data }) => {
      data.token
        ? window.sessionStorage.setItem('token', data.token)
        : window.sessionStorage.removeItem('token');

      return data;
    })
    .catch(console.error);

export const createUser = async (formData) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:8000/authentication/register/',
    data: formData,
  };

  const { data } = await axios.request(options);

  return data;
};

export const getUserById = async (id) => {
  const options = {
    method: 'GET',
    url: `http://localhost:8000/authentication/user/${id}/`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };
  const { data } = await axios.request(options);

  return data;
};
