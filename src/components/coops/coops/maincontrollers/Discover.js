import React, { useEffect, useState } from 'react';
import CardBoard from '../../../templates/CardBoardTemplate';
import { getAllCoops, getOwnedCoops } from '../../../../api/coops';
import { Link } from 'react-router-dom';
const Discover = () => {
  // fillter controller js

  const [pageView, setPageView] = useState('All Coops');
  const handleViewChange = (event) => {
    setPageView(event.target.name);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getAllCoops();
      console.log(gottenData);
      setData(gottenData);
    };

    getData();
  }, []);
  const [data2, setData2] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getOwnedCoops();
      console.log(gottenData);
      setData2(gottenData);
    };

    getData();
  }, []);

  function cardBoardPicker(data, cardBoard) {
    if (cardBoard === 'All Coops') {
      const props = {
        data: data,
        cardType: 1,
      };
      return <CardBoard {...props} />;
    }
    if (cardBoard === 'My Coops') {
      const props = {
        data: data2,
        cardType: 1,
      };
      return <CardBoard {...props} />;
    }
  }

  console.log(data);

  return (
    <div className="page">
      <Link to="/coop/create">ADD COOP</Link>
      <div className="discover-control-pannel">
        <h1>Discover.</h1>
        <button name="All Coops" onClick={handleViewChange}>
          {' '}
          All Coops{' '}
        </button>
        <button name="My Coops" onClick={handleViewChange}>
          {' '}
          My Coops{' '}
        </button>
        <button onClick={handleToggle}>
          {menuOpen ? ' Hide Filters' : 'Show Filters'}
        </button>
      </div>
      <div className="coop-filters-holder">
        <div
          className={`coop-filter-controller ${menuOpen ? ' showMenu' : ''}`}
        >
          <div className="filter-controller-field">
            <label htmlFor="cars">Choose a car:</label>
            <select name="cars" id="cars" multiple>
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="filter-controller-field">
            <label htmlFor="cars">Choose a car:</label>
            <select name="cars" id="cars" multiple>
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="filter-controller-field">
            <label htmlFor="cars">Choose a car:</label>
            <select name="cars" id="cars" multiple>
              <option value="volvo">Volvo</option>
            </select>
          </div>
        </div>
      </div>
      <div className="discover-page">{cardBoardPicker(data, pageView)}</div>
    </div>
  );
};

export default Discover;

//order calcualtion
// do it on the front end and then send it to the back end
// data from back end to front end to back end.

//
