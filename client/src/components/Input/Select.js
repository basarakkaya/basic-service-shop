import React from 'react';
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

  &:focus {
    outline: none;
  }
`;

const Select = ({ values = [], name = '', placeholder = '' }) => {
  // TODO: set onChange etc...
  return (
    <Container>
      <Dropdown name={name}>
        <option value='' selected disabled>
          {placeholder}
        </option>
        {values.map((val) => (
          <option value={val.value}>{val.label}</option>
        ))}
      </Dropdown>
    </Container>
  );
};

export default Select;
