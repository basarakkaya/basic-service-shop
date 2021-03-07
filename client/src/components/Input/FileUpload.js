import React, { useState } from 'react';
import styled from 'styled-components';

import PlusLight from '../../assets/PlusLight';

const Container = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 3px;
  border: none;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const FileUpload = ({ onChange }) => {
  return (
    <Container>
      <label htmlFor='file'>
        <Button>
          <PlusLight />
        </Button>
      </label>
      <input
        id='file'
        type='file'
        style={{ visibility: 'hidden', height: 0, width: 0 }}
        onChange={(event) => onChange(event.target.value)}
      />
    </Container>
  );
};

export default FileUpload;
