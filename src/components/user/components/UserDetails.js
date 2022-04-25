import React, { useEffect, useState } from 'react';
const CoopDetails = ({ data }) => {
  const cityData = data.city;
  const ownerData = data.owner;
  const purchaseFrequencyOptions = data.purchase_frequency_option;
  return (
    <div className="single-coop-pannel-page">
      <div className="is-half-section">
        <div className="is-half container">
          <h2>Details:</h2>
          <p>
            <b>UserName:</b> {data.username}
          </p>
          <p>
            <b>Management Fees: </b>
            {data.management_fee}
          </p>
          <p>
            <b>Purchase Frequency: </b>
            {purchaseFrequencyOptions?.option_name}
          </p>
          <p>
            <b>Bring Your Own Bag: </b>
            {!data.bring_your_own_bag ? 'No' : 'Yes'}
          </p>
        </div>
        <div className="is-half container">
          <h2>Home Address:</h2>
          <p>
            <b>City: </b>
            {cityData?.city_name}
          </p>
          <p>
            <b>Line 1: </b>
            {data.address_1}
          </p>
          <p>
            <b>Line 2: </b>
            {data.address_2}
          </p>
          <p>
            <b>Postcode: </b>
            {data.postcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoopDetails;

//order calcualtion
// do it on the front end and then send it to the back end
// data from back end to front end to back end.

//
