import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.form`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
`;

const Dropdown = styled.select`
  width: 100%;
  height: 40px;
  border-color: #c5c6cd;
  border-radius: 3px;
  color: #6e7081;
  padding: 8px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Select = ({
  values = [],
  name = '',
  placeholder = '',
  onChange,
  value = '',
}) => {
  const [selectValue, setValue] = useState(value);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (onChange) onChange(event.target.value);
  };

  return (
    <Container>
      <Dropdown name={name} onChange={handleChange} value={selectValue}>
        <option value='' disabled>
          {placeholder}
        </option>
        {values.map((val) => (
          <option key={val.value} value={val.value}>
            {val.label}
          </option>
        ))}
      </Dropdown>
    </Container>
  );
};

export default Select;
