import React, { useEffect, useState } from 'react';
import {
  createCoopItem,
  getCoopItems,
  getItemTypes,
  getQuantityUnits,
} from '../../../../../../api/coops';
import CardBoard from '../../../../../templates/CardBoardTemplate';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddCoopItemForm from './CreateNewItemForm';
const CoopInventory = () => {
  const navigate = useNavigate;
  const { coopId } = useParams();
  const [dataOne, setDataOne] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getCoopItems(coopId);
      setDataOne(gottenData);
      console.log('ITEMS:', dataOne);
    };

    getData();
    console.log('ITEMS:', dataOne);
  }, []);

  const [pageView2, setPageView2] = React.useState(false);
  const changeView = () => {
    setPageView2(!pageView2);
  };
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
  const props = {
    data: dataOne,
    cardType: 2,
  };

  return (
    <div className="single-coop-pannel-page">
      <button onClick={changeView}>
        {!pageView2 ? 'New Item' : 'All Items'}
      </button>
      {pageView2 ? (
        <AddCoopItemForm />
      ) : (
        <div>
          <h1>Hello here is your Inventory</h1>
          <CardBoard {...props} />
        </div>
      )}
    </div>
  );
};

export default CoopInventory;

//order calcualtion
// do it on the front end and then send it to the back end
// data from back end to front end to back end.

//
