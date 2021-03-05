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

  &:focus {
    outline: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
`;

const FileUpload = () => {
  // TODO: set file uploading staet
  const [open, toggleOpen] = useState(false);
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
      />
      {open && <Overlay />}
    </Container>
  );
};

export default FileUpload;
