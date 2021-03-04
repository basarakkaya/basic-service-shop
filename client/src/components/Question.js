import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
`;

const Question = ({ question }) => {
  return (
    <div>
      <Title>{question.label}</Title>
    </div>
  );
};

export default Question;
