import React, { useEffect, useState } from 'react';
import { getCoopItems, getItemTypes } from '../../../../../api/coops';
import CardBoard from '../../../../templates/CardBoardTemplate';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createOrderProposal } from '../../../../../api/Orders';
const CoopShoppingList = () => {
  const navigate = useNavigate;
  const { coopId } = useParams();
  const [dataOne, setDataOne] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getCoopItems(coopId);
      const gottenDataWithSeletedState = gottenData.map((item) => ({
        ...item,
        cardSelected: false,
      }));
      setDataOne(gottenDataWithSeletedState);
    };

    getData();
  }, []);

  const [form, setForm] = React.useState({});

  const handleChange = (event) => {
    console.log(form);
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await createOrderProposal(coopId, form);
        console.log('COOP Item Created');
        navigate(`coop/${coopId}`);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }

  const [itemsArray, setItemsArray] = React.useState([]);

  function addItemToOrder(event) {
    console.log(event.target.id);
    // const item = event.target.id;
    // if (itemsArray.find((item)=>{})) {
    const newData = dataOne.map((item) => {
      if (event.target.id === item.id) {
        return { ...item, cardSelected: !item.cardSelected };
      } else {
        return item;
      }
    });
    setDataOne(newData);
    setForm({ ...form, items_id: itemsArray });
    setItemsArray([...itemsArray, event.target.id]);
    console.log('HERE ARE YOU ITEMS:', itemsArray);
    console.log(dataOne);
    // }
    // if (searchArray) {
    //   console.log('item already added');
    // }
  }

  const [itemTypes, setItemTypes] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getItemTypes();
      setItemTypes(gottenData);
    };

    getData();
  }, []);

  const props = {
    data: dataOne,
    formula: addItemToOrder,
    cardType: 3,
  };
  return (
    <div className="single-coop-pannel-page">
      <div className="form-section">
        <form>
          <h1 className="form-title">+ Order</h1>
          <div className="form-field">
            <label htmlFor="deadline">Order By Date</label>
            <input onChange={handleChange} type="date" name="deadline" />
          </div>
          <div className="form-field">
            <label htmlFor="delivery_day">Delivery Date</label>
            <input onChange={handleChange} type="date" name="delivery_day" />
          </div>
          <div className="form-field">
            <label htmlFor="item_type">Item Type</label>
            <select name="item_type" onChange={handleChange}>
              <option selected disabled hidden>
                Select Field
              </option>
              {itemTypes.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.item_type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="item_type">Item List</label>
            <select name="item_type" onChange={addItemToOrder} multiple>
              <option selected disabled hidden>
                Select Field
              </option>
              {dataOne.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.item_name}
                </option>
              ))}
            </select>
          </div>
          <CardBoard {...props} />
          <div className="form-field">
            <div className="form-button">
              <button onClick={handleSubmit}>CREATE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoopShoppingList;

//order calcualtion
// do it on the front end and then send it to the back end
// data from back end to front end to back end.

//
