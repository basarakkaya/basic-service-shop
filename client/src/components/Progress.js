import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 3px;
  position: relative;
  background: transparent;

  span {
    display: block;
    height: 100%;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: #2cb34f;
    position: relative;
    overflow: hidden;
  }
`;

const Progress = ({ progressPercentage }) => {
  return (
    <Container>
      <span style={{ width: `${progressPercentage || 0}%` }}></span>
    </Container>
  );
};

export default Progress;
