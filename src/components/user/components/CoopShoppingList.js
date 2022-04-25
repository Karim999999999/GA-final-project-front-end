import React, { useEffect, useState } from 'react';
import {
  getCoopItems,
  createCoopItem,
  getItemTypes,
  getQuantityUnits,
} from '../../../../../api/coops';
import CardBoard from '../../../../templates/CardBoardTemplate';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CoopShoppingList = () => {
  const navigate = useNavigate;
  const { coopId } = useParams();
  const [dataOne, setDataOne] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getCoopItems(coopId);
      setDataOne(gottenData);
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
        await createCoopItem(coopId, form);
        console.log('COOP Item Created');
        navigate(`coop/${coopId}`);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }
  const [cardSelected, setCardSelected] = React.useState(false);
  const [itemsArray] = React.useState([]);
  function addItemToOrder(event) {
    itemsArray.push(event.target.className);
    console.log('HERE ARE YOU ITEMS:', itemsArray);
    setCardSelected(true);
    setForm({ ...form, items_id: itemsArray });
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
    cardState: cardSelected,
    cardType: 3,
  };
  return (
    <div className="single-coop-pannel-page">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
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
              <button type="submit">CREATE</button>
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
