import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Minus from '../../assets/Minus';
import PlusDark from '../../assets/PlusDark';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  padding: 16px;
  display: flex;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #c5c6cd;
  background: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #c5c6cd;
  }
`;

const LabelContainer = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const Value = styled.p`
  font-size: 48px;
  margin: 0;
  line-height: 52px;
`;

const Unit = styled.p`
  font-size: 18px;
  margin: 0;
  line-height: 22px;
  color: #9c9da9;
`;

const Stepper = ({ question: { values, unit }, onChange, value }) => {
  const [index, setIndex] = useState(
    values.findIndex((val) => val.value === value) > -1
      ? values.findIndex((val) => val.value === value)
      : 0
  );
  const displayValues = values.sort((a, b) => a.valueOrder - b.valueOrder);

  const increase = () => {
    if (index !== values.length - 1) {
      onChange(values[index + 1].value);
      setIndex(index + 1);
    }
  };

  const decrease = () => {
    if (index !== 0) {
      onChange(values[index - 1].value);
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    onChange(values[index].value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Button onClick={decrease}>
        <Minus />
      </Button>
      <LabelContainer>
        <Value>{displayValues[index].value}</Value>
        <Unit>{unit}</Unit>
      </LabelContainer>
      <Button onClick={increase}>
        <PlusDark />
      </Button>
    </Container>
  );
};

export default Stepper;
