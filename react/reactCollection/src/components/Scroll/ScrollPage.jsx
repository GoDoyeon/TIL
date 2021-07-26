import React from 'react';
import styled from 'styled-components';
import Middle from './Middle';
import Side from './Side';

const ScrollPage = () => {
  return (
    <MainBlock>
      <ContentBlock>
        <Middle />
        <Side />
      </ContentBlock>
    </MainBlock>
  );
};

const MainBlock = styled.div`
  margin: 3rem 5rem;
`;
const ContentBlock = styled.div`
  width: 100%;
  display: flex;
`;
export default ScrollPage;
