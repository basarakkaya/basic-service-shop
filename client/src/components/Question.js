import React from 'react';
import styled from 'styled-components';
import RenderOption from './RenderOption';

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
      <RenderOption question={question} />
    </div>
  );
};

export default Question;
