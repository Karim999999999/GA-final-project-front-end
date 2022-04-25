import axios from 'axios';

export const createOrderProposal = async (id, formData) => {
  const options = {
    method: 'POST',
    url: `http://localhost:8000/ordermanage/coops/${id}/order_proposals/`,
    data: formData,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
