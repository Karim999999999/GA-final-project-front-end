import React, { useEffect, useState } from 'react';
import {
  createCoopItem,
  getItemTypes,
  getQuantityUnits,
} from '../../../../../../api/coops';
import CardBoard from '../../../../../templates/CardBoardTemplate';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AddCoopItemForm = () => {
  const navigate = useNavigate;
  const { coopId } = useParams();

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

  const [quantityUnits, setQuantityUnits] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getQuantityUnits();
      setQuantityUnits(gottenData);
    };

    getData();
    console.log('ITEMS:', quantityUnits);
  }, []);

  const [itemTypes, setItemTypes] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getItemTypes();
      setItemTypes(gottenData);
    };

    getData();
    console.log('ITEMS:', quantityUnits);
  }, []);

  return (
    <div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <h1 className="form-title">+ Coop Item.</h1>
          <div className="form-field">
            <label htmlFor="item_name">Item Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="item_name"
              placeholder="CoCo Buffs Cereal (500g)"
            />
          </div>
          <div className="form-field">
            <label htmlFor="item_description">Item Description</label>
            <textarea
              onChange={handleChange}
              type=""
              name="item_description"
              placeholder="Chocolaty cereal goodness... medium size box good for 6 portions."
            />
          </div>
          <div className="form-field">
            <label htmlFor="item_url">Item Url</label>
            <input
              onChange={handleChange}
              type="url"
              name="item_url"
              placeholder="https://cocobuffs.com"
            />
          </div>
          <div className="form-field">
            <label htmlFor="minimum_purchase_amount">
              Minimum Purchase Amount (units)
            </label>
            <input
              onChange={handleChange}
              type="number"
              name="minimum_purchase_amount"
              placeholder="4"
            />
          </div>
          <div className="form-field">
            <label htmlFor="quantity_units">Quantity Unit</label>
            <select name="quantity_units" onChange={handleChange}>
              <option selected disabled hidden>
                Select Field
              </option>
              {quantityUnits.map((unit) => (
                <option value={unit.id} key={unit.id}>
                  {' '}
                  {unit.quantity_unit_shorthand}:{unit.quantity_unit_full}
                </option>
              ))}
            </select>
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
            <div className="form-button">
              <button type="submit">CREATE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoopItemForm;

//order calcualtion
// do it on the front end and then send it to the back end
// data from back end to front end to back end.

//
