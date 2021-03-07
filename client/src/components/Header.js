import React from 'react';
import styled from 'styled-components';

import Progress from './Progress';

import ChevronLeft from '../assets/ChevronLeft';
import Cross from '../assets/Cross';

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 43px;
  padding: 16px;
  display: flex;
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
`;

const Label = styled.div`
  flex-grow: 1;
  width: 100%;
  text-align: center;
  line-height: 100%;
  font-weight: 700;
  font-size: 12px;
`;

const ButtonContainer = styled.div`
  min-width: 16px;
`;

const Button = styled.button`
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Header = ({ label, onBack, onCancel, progressPercentage }) => {
  return (
    <>
      <Container>
        <ButtonContainer>
          {onBack && (
            <Button onClick={onBack}>
              <ChevronLeft style={{ height: 12 }} />
            </Button>
          )}
        </ButtonContainer>
        <Label>{label}</Label>
        <ButtonContainer>
          {onCancel && (
            <Button onClick={onCancel}>
              <Cross style={{ height: 12 }} />
            </Button>
          )}
        </ButtonContainer>
      </Container>
      <Progress progressPercentage={progressPercentage} />
    </>
  );
};

export default Header;
