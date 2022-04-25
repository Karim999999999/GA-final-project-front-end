import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ data }) => {
  console.log(data);
  console.log('card');
  return (
    <Link to={`/coop/${data.id}`} key={data.id}>
      <div className="card">
        <div className="card-content">
          <div className="card-title-postcode">
            <p className="title">
              <b>{data.item_name}</b>, {data.postcode}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
