import React, { useEffect, useState } from 'react';

import { getServices } from '../api/services';

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
    <div>
      {loading && <p>Yükleniyor...</p>}
      {services.length > 0 &&
        services.map((service) => (
          <button key={service.serviceId} onClick={() => onSelect(service)}>
            {service.name}
          </button>
        ))}
    </div>
  );
};

export default ServiceSelector;
