import React from 'react';
import { Link } from 'react-router-dom';

const CoopMainDetails = ({ data }) => {
  // const realdata = data;
  // console.log('this is realdata',realdata);
  // console.log(data.coop_tag);
  const cooptag = data.coop_tag;
  return (
    data && (
      <div className="coop-main-details">
        <h1>
          {data.coop_name}, {data.postcode}
        </h1>
        <div className="single-coop-tags">
          {cooptag?.map((tag) => {
            return (
              <p className="coop-tag" key={tag.id}>
                {tag.tag_name}
              </p>
            );
          })}
        </div>
        <p className="description">{data.coop_description}</p>
      </div>
    )
  );
};

export default CoopMainDetails;
