import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  console.log('card');
  return (
    <Link to={`/coop/${data.id}`} key={data.id}>
      <div className="card">
        <div className="card-price-tag">
          <p>${data.price}</p>
        </div>
        <div className="card-content">
          <div className="card-title-postcode">
            <p className="title">
              <b>{data.coop_name}</b>, {data.postcode}
            </p>
          </div>
          <div className="card-tags">
            {data.coop_tag.map((tag) => {
              return (
                <p className="card-tag" key={tag.tag_name}>
                  {tag.tag_name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
