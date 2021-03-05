import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getServices } from '../api/services';

const Container = styled.div`
  padding: 24px;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const Table = styled.table`
  width: 100%;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 4px 2px;
  border-spacing: 0px;

  tr {
    height: 32px;
    min-height: 32px;
  }

  th,
  td {
    padding: 7px 16px;
    font-size: 14px;
    text-align: left;
  }

  th,
  td:hover,
  td:focus,
  td:active {
    background-color: #f8f8f8;
    font-weight: 500;
  }
`;

const ServiceSelector = ({ onSelect }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getServices().then((res) => {
      setLoading(false);
      setServices(res.services);
    });
  }, []);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Servisler {loading && <span>Yükleniyor...</span>}</th>
          </tr>
        </thead>
        <tbody>
          {services.length > 0 &&
            services.map((service) => (
              <tr key={service.serviceId} onClick={() => onSelect(service)}>
                <td>{service.name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ServiceSelector;
