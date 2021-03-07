import React, { useState } from 'react';
import styled from 'styled-components';

import Select from './Select';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  gap: 8px;
  max-width: 600px;
  margin: auto;
`;

const Location = ({ question, onChange, value }) => {
  const [location, setLocation] = useState(value || {});

  const handleChange = (label) => (value) => {
    setLocation({
      ...location,
      [label]: value,
    });
    onChange({
      ...location,
      [label]: value,
    });
  };

  return (
    <Container>
      <Select
        placeholder='İl'
        name='İl'
        values={[{ value: '34', label: 'İstanbul' }]}
        onChange={handleChange('il')}
        value={location['il'] || ''}
      />
      <Select
        placeholder='İlçe'
        name='İlçe'
        values={[{ value: '1', label: 'Kadıköy' }]}
        onChange={handleChange('ilçe')}
        value={location['ilçe'] || ''}
      />
      <Select
        placeholder='Mahalle'
        name='Mahalle'
        values={[
          { value: '34738', label: 'Erenköy' },
          { value: '34710', label: 'Moda' },
        ]}
        onChange={handleChange('mahalle')}
        value={location['mahalle'] || ''}
      />
    </Container>
  );
};

export default Location;
