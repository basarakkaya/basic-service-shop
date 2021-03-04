import React, { useState } from 'react';

import ServiceDetails from './components/ServiceDetails';
import ServiceSelector from './components/ServiceSelector';

const App = () => {
  const [service, setService] = useState(null);

  const onServiceSelected = (selectedService) => {
    setService(selectedService);
  };

  const onSubmit = (data) => {
    // TODO: do something
    console.log(data);
  };

  return (
    <div>
      {service ? (
        <ServiceDetails
          service={service}
          onCancel={() => setService(null)}
          onSubmit={onSubmit}
        />
      ) : (
        <ServiceSelector onSelect={onServiceSelected} />
      )}
    </div>
  );
};

export default App;
