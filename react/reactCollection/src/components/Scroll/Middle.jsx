import React from 'react';
import styled from 'styled-components';

const Middle = () => {
  return (
    <MiddleBlock>
      <div id="1">
        <h2>day 1</h2>
        <p>contnet</p>
      </div>
      <div id="2">
        <h2>day 2</h2>
        <p>contnet</p>
      </div>
      <div id="3">
        <h2>day 3</h2>
        <p>contnet</p>
      </div>
      <div id="4">
        <h2>day 4</h2>
        <p>contnet</p>
      </div>
    </MiddleBlock>
  );
};

const MiddleBlock = styled.div`
  div {
    height: 500px;
  }
`;

export default Middle;
