import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  height: 62px;
  padding: 8px 16px;

  button {
    background-color: #2cb34f;
    color: #fff;
    text-align: center;
    border: none;
    border-radius: 3px;
    height: 100%;
    width: 100%;
    font-weight: 700;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
`;

const Proceed = ({ label, onClick }) => {
  return (
    <Container>
      <button onClick={onClick}>{label.toUpperCase()}</button>
    </Container>
  );
};

export default Proceed;
