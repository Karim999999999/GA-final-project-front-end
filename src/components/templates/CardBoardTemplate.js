import React from 'react';
import ClickableItemCard from '../coops/coops/itemscontrollers/ClickableItemCard';
import ItemCard from '../coops/coops/itemscontrollers/SingleItemCard';
import Card from './SingleCardTemplate';

const CardBoard = (props) => {
  function cardTypePicker(data, cardType, formula, cardState) {
    console.log();
    if (cardType === 1) {
      return data.map((datapoint) => {
        return <Card data={datapoint} key={datapoint.id} />;
      });
    }
    if (cardType === 2) {
      return data.map((datapoint) => {
        return <ItemCard data={datapoint} key={datapoint.id} />;
      });
    }
    if (cardType === 3) {
      return data.map((datapoint) => {
        const props = {
          data: datapoint,
          formula: formula,
          cardState: cardState,
        };
        return <ClickableItemCard {...props} key={datapoint.id} />;
      });
    }
  }
  return (
    <div className="cardsholder">
      {cardTypePicker(
        props.data,
        props.cardType,
        props.formula,
        props.cardState
      )}
    </div>
  );
};

export default CardBoard;
