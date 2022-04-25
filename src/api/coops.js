import axios from 'axios';

export const getAllCoops = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/coopcreate/coops/',
  };

  const { data } = await axios.request(options);

  return data;
};
export const getQuantityUnits = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/coopmanage/quantity_units/',
  };

  const { data } = await axios.request(options);

  return data;
};
export const getItemTypes = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/coopmanage/coop_item_types/',
  };

  const { data } = await axios.request(options);

  return data;
};
export const getCoopById = async (id) => {
  const options = {
    method: 'GET',
    url: `http://localhost:8000/coopcreate/coops/${id}`,
  };

  const { data } = await axios.request(options);

  return data;
};
export const getCities = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/coopcreate/cities/',
  };

  const { data } = await axios.request(options);

  return data;
};
export const getCoopTags = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/coopcreate/cooptags/',
  };

  const { data } = await axios.request(options);

  return data;
};
export const getPurchaseOptions = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/coopcreate/purchase_options/',
  };

  const { data } = await axios.request(options);

  return data;
};
export const getCoopItems = async (id) => {
  const options = {
    method: 'GET',
    url: `http://localhost:8000/coopmanage/coops/${id}/items/`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
export const getOwnedCoops = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/coopcreate/coops/owned/',
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
export const getLocationDetails = async (searchText) => {
  const options = {
    method: 'GET',
    url: `https://api.myptv.com/geocoding/v1/locations/by-address?postalCode=${searchText}&apiKey=MGRiZDM5ZTMzZjAyNDU1ZDk3NGY2YmQ5YmM0NjM3ZGU6MzY2MWY1YmMtZTljZS00YjI5LWJmODQtMjJlNDgwODhjNGNm`,
  };

  const { data } = await axios.request(options);

  return data;
};

export const createCoop = async (formData) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:8000/coopcreate/coops/',
    data: formData,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
export const createCoopItem = async (id, formData) => {
  const options = {
    method: 'POST',
    url: `http://localhost:8000/coopmanage/coops/${id}/items/`,
    data: formData,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
