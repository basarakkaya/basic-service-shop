import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.form`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 140px;
  max-height: 200px;
  line-height: 22px;
  font-size: 14px;
  border-radius: 3px;
  border: 1px solid ${(props) => (props.error ? '#f1664a' : '#c5c6cd')};
  padding: 8px;
  font-family: 'Raleway';

  &:active,
  &:focus {
    outline: green auto 1px;
  }
`;

const HelperText = styled.p`
  color: #f1664a;
  font-size: 10px;
  line-height: 15px;
  margin: 0;
`;

const TextField = ({ question: { placeHolder }, onChange, value = '' }) => {
  // TODO: set error state
  const [error, setError] = useState(false);
  const [textValue, setValue] = useState(value);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Container>
      <Textarea
        rows='3'
        error={error}
        placeholder={placeHolder || ''}
        value={textValue}
        onChange={handleChange}
      />
      {error && <HelperText>Bu alan zorunlu</HelperText>}
    </Container>
  );
};

export default TextField;
