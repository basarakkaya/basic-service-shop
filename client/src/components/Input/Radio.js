import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.form`
  display: grid;
  grid-template-columns: ${(props) => (props.withImage ? '1fr 1fr' : '1fr')};
  gap: 15px;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
`;
const Label = styled.label`
  background-color: #f8f8f8;
  border-radius: 3px;
  cursor: pointer;
`;
const ImgContainer = styled.div`
  padding: 12px;
  text-align: center;
`;
const InputContainer = styled.div`
  display: flex;
  padding: 12px;
`;
const RadioInput = styled.input`
  margin-right: 8px;
`;
const TextLabel = styled.label`
  flex-grow: 1;
  width: 100%;
`;

export const RadioComponent = ({
  val: { value, valueImageUrl, id },
  name,
  withImage,
  subcomponent = null,
  checked,
}) => (
  <Label htmlFor={`radio_${id}`}>
    {withImage && (
      <ImgContainer>
        <img src={valueImageUrl} alt={value} />
      </ImgContainer>
    )}
    <InputContainer>
      <RadioInput
        type='radio'
        id={`radio_${id}`}
        value={value}
        name={name}
        defaultChecked={checked}
      />
      <TextLabel htmlFor={`radio_${id}`}>{value}</TextLabel>
    </InputContainer>
    {subcomponent}
  </Label>
);

const Radio = ({ question: { values }, name, onChange, withImage, value }) => {
  // TODO: handle state
  // TODO: customize radio button checked state color

  const [radioValue, setValue] = useState(value);

  const handleChange = (e) => {
    if (onChange) {
      setValue(e.target.value);
      onChange(e.target.value);
    }
  };

  return (
    <Container onChange={handleChange} withImage={withImage}>
      {values
        .sort((a, b) => a.valueOrder - b.valueOrder)
        .map((value, index) => (
          <RadioComponent
            key={value.id}
            val={value}
            name={name}
            withImage={withImage}
            checked={radioValue === value.value}
          />
        ))}
    </Container>
  );
};

export default Radio;
