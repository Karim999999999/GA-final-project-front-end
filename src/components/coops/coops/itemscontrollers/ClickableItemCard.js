import react from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const ClickableItemCard = (props) => {
  console.log(props.data.cardSelected);
  const [classNames, setClassNames] = React.useState(
    !props.data.cardSelected ? 'card selected' : 'card'
  );
  React.useEffect(() => {
    setClassNames(props.data.cardSelected ? 'card selected' : 'card');
  }, [props.cardState]);
  return (
    <div className={classNames} id={props.data.id} onClick={props.formula}>
      <div className="card-content">
        <div className="card-title-postcode">
          <p className="title">
            <b>{props.data.item_name}</b>
          </p>
          <button className={props.data.id}>Add To Order</button>
        </div>
      </div>
    </div>
  );
};

export default ClickableItemCard;
