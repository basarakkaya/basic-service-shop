import React from 'react';
import styled from 'styled-components';

import Select from './Select';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  gap: 8px;
  max-width: 600px;
  margin: auto;
`;

const Location = ({ question }) => {
  // TODO: value states
  return (
    <Container>
      <Select
        placeholder='İl'
        name='İl'
        values={[{ value: '34', label: 'İstanbul' }]}
      />
      <Select
        placeholder='İlçe'
        name='İlçe'
        values={[{ value: '1', label: 'Kadıköy' }]}
      />
      <Select
        placeholder='Mahalle'
        name='Mahalle'
        values={[{ value: '34738', label: 'Erenköy' }]}
      />
    </Container>
  );
};

export default Location;
