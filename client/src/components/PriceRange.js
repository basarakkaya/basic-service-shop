import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 51px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px 0px;

  div {
    text-align: center;
    font-weight: 700;
    font-size: 12px;
  }

  & .price {
    font-size: 16px;
  }
`;

const PriceRange = ({ price: { max, min, currency } }) => {
  return (
    <Container>
      <div>Ortalama Fiyat Aralığı: </div>
      <div>
        <span className='price'>
          {min}-{max}
        </span>{' '}
        {currency}
      </div>
    </Container>
  );
};

export default PriceRange;
