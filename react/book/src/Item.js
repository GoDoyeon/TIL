import React from 'react';

const Item = (props) => {
  return (
    <li>
      <dl>
        <dt>
          <img src={props.thumbnail} alt={props.thumbnail} />
        </dt>
      </dl>
      <dd>
        <h3>{props.title}</h3>
        <p>{props.contents}</p>
      </dd>
    </li>
  );
};

export default Item;
