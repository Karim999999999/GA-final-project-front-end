import React, { useEffect, useState } from 'react';
import CoopDetails from './components/CoopDetails';
import { Link } from 'react-router-dom';
import { getCoopById } from '../../../../api/coops';
import { useParams } from 'react-router-dom';
import CoopBuyIn from './components/CoopBuyIn';
import CoopInventory from './components/InventoryPage/CoopInventoryList';
import CoopShoppingBasket from './components/CoopShoppingList';
import CoopSuggestions from './components/CoopSuggestions';
import CoopMainDetails from './components/CoopMainDetails';
const SingleCoop = () => {
  const [pageView, setPageView] = useState('Details');
  const handleViewChange = (event) => {
    setPageView(event.target.name);
    console.log(pageView);
  };
  const { coopId } = useParams();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getCoopById(coopId);
      setData(gottenData);
    };
    getData();
  }, []);

  const pageViewPicker = (data) => {
    if (pageView === 'Details') {
      return <CoopDetails data={data} />;
    }
    if (pageView === 'Inventory') {
      return <CoopInventory data={data} />;
    }
    if (pageView === 'Shopping List') {
      return <CoopShoppingBasket data={data} />;
    }
    if (pageView === 'Suggestions') {
      return <CoopSuggestions data={data} />;
    }
    if (pageView === 'Buy_In') {
      return <CoopBuyIn data={data} />;
    }
  };
  return (
    <div className="page">
      <div className="singlecooppage">
        <Link to="/discover">BACK</Link>
        <Link to="/discover">EDIT</Link>
        <button name="Buy_In" onClick={handleViewChange}>
          Buy In
        </button>
        <CoopMainDetails data={data} />
        <div className="discover-control-pannel">
          <button className="Big" name="Details" onClick={handleViewChange}>
            Details
          </button>
          <button className="Big" name="Inventory" onClick={handleViewChange}>
            Inventory
          </button>
          <button
            className="Big"
            name="Shopping List"
            onClick={handleViewChange}
          >
            Shopping List
          </button>
          <button className="Big" name="Suggestions" onClick={handleViewChange}>
            Suggestions
          </button>
        </div>
        {pageViewPicker(data)}
      </div>
    </div>
  );
};

export default SingleCoop;

//order calcualtion
// do it on the front end and then send it to the back end
// data from back end to front end to back end.

//
