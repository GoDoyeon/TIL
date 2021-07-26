import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Side = () => {
  return (
    <SideBlock>
      <div>
        <Link to="1" spy={true} smooth={true}>
          <span>Day 1</span>
        </Link>
        <br />
        <Link to="2" spy={true} smooth={true}>
          <span>Day 2</span>
        </Link>
        <br />
        <Link to="3" spy={true} smooth={true}>
          <span>Day 3</span>
        </Link>
        <br />
        <Link to="4" spy={true} smooth={true}>
          <span>Day 4</span>
        </Link>
      </div>
    </SideBlock>
  );
};

const SideBlock = styled.div`
  width: 10%;
  position: fixed;
  right: 5rem;
  margin-top: 70px;
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    cursor: pointer;
  }
`;

export default Side;
