import React from 'react';
import styled from 'styled-components';

import { RadioComponent } from './Radio';
import Select from './Select';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  gap: 8px;
  max-width: 600px;
  margin: auto;
`;

const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px;
  padding: 8px;
`;

const TimeSelector = () => (
  <SelectContainer>
    <Select
      values={[{ value: '10/03/2021', label: 'Mart 10, 2021' }]}
      placeholder='Tarih'
      name='date'
    />
    <Select
      values={[{ value: '10:00', label: '10:00' }]}
      placeholder='Saat'
      name='time'
    />
  </SelectContainer>
);

const Time = ({ question: { values }, name }) => {
  const displayValues = values.sort((a, b) => a.valueOrder - b.valueOrder);

  return (
    <Container>
      {displayValues.map((value, index) => (
        <RadioComponent
          key={value.id}
          name={name}
          val={value}
          subcomponent={index === 0 && <TimeSelector />}
        />
      ))}
      {/* <RadioComponent subcomponent={TimeSelector} /> */}
    </Container>
  );
};

export default Time;
