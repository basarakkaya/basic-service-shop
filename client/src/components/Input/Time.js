import React, { useState } from 'react';
import styled from 'styled-components';

import { RadioComponent } from './Radio';
import Select from './Select';

const Container = styled.form`
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

const TimeSelector = ({ value = {} }) => (
  <SelectContainer>
    <Select
      values={[
        { value: '10/03/2021', label: 'Mart 10, 2021' },
        { value: '11/03/2021', label: 'Mart 11, 2021' },
      ]}
      placeholder='Tarih'
      name='date'
      value={value['date'] || ''}
    />
    <Select
      values={[
        { value: '10:00', label: '10:00' },
        { value: '11:00', label: '11:00' },
      ]}
      placeholder='Saat'
      name='time'
      value={value['time'] || ''}
    />
  </SelectContainer>
);

const Time = ({ question: { values }, name, onChange, value = {} }) => {
  const displayValues = values.sort((a, b) => a.valueOrder - b.valueOrder);
  const [timeValue, setTimeValue] = useState(value);

  const handleChange = (event) => {
    let val = {};

    if (event.target.type !== 'radio') {
      val = {
        value: displayValues[0].value,
        datetime: {
          ...timeValue.datetime,
          [event.target.name]: event.target.value,
        },
      };
    } else {
      val = { value: event.target.value };
    }

    setTimeValue(val);
    onChange(val);
  };

  return (
    <Container onChange={handleChange}>
      {displayValues.map((val, index) => (
        <RadioComponent
          key={val.id}
          name={name}
          val={val}
          subcomponent={
            index === 0 && <TimeSelector value={timeValue.datetime} />
          }
          checked={val.value === timeValue.value}
        />
      ))}
    </Container>
  );
};

export default Time;
