import React, { useEffect, useState } from 'react';
import UserDetails from './components/UserDetails';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CoopInventory from '../coops/coops/singlecoop/components/InventoryPage/CoopInventoryList';
import CoopShoppingBasket from '../coops/coops/singlecoop/components/CoopShoppingList';
import { getUserById } from '../../api/auth';
import UserMainDetails from './components/UserMainDetails';
import Orders from './components/Orders';

const UserPage = () => {
  const [pageView, setPageView] = useState('Details');
  const handleViewChange = (event) => {
    setPageView(event.target.name);
    console.log(pageView);
  };
  const { userId } = useParams();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getUserById(userId);
      setData(gottenData);
    };
    getData();
    console.log(data);
  }, []);

  const pageViewPicker = (data) => {
    console.log(data);
    if (pageView === 'Details') {
      return <UserDetails data={data} />;
    }
    if (pageView === 'Inventory') {
      return <CoopInventory data={data} />;
    }
    if (pageView === 'Shopping List') {
      return <CoopShoppingBasket data={data} />;
    }
    if (pageView === 'Suggestions') {
      return <Orders data={data} />;
    }
  };
  const cooptags = data.coop_tag;
  console.log(cooptags);
  return (
    <div className="page">
      <div className="singlecooppage">
        <Link to="/discover">SIGN OUT</Link>
        <Link to="/discover">EDIT</Link>
        <UserMainDetails data={data} />
        <div className="discover-control-pannel">
          <button className="Big" name="Details" onClick={handleViewChange}>
            Details
          </button>
          <button className="Big" name="Inventory" onClick={handleViewChange}>
            Joined Coops
          </button>
          <button
            className="Big"
            name="Shopping List"
            onClick={handleViewChange}
          >
            Owned Coop
          </button>
          <button className="Big" name="Suggestions" onClick={handleViewChange}>
            Orders
          </button>
        </div>
        {pageViewPicker(data)}
      </div>
    </div>
  );
};

export default UserPage;

//order calcualtion
// do it on the front end and then send it to the back end
// data from back end to front end to back end.

//
