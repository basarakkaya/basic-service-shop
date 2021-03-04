import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #111321;
  color: #fff;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  text-align: center;
  padding: 8px 16px;
`;

const DiscountRate = ({ text }) => {
  // TODO: split the string to find percentage and give the percentage a new class with green text color
  return <Container>{text}</Container>;
};

export default DiscountRate;
