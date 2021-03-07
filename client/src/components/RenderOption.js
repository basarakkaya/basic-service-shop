import React from 'react';

import FileUpload from './Input/FileUpload';
import Radio from './Input/Radio';
import Location from './Input/Location';
import Stepper from './Input/Stepper';
import TextField from './Input/TextField';
import Time from './Input/Time';

const RenderOption = ({ question, onChange, selectedServices }) => {
  switch (question.typeId) {
    case 4:
      return (
        <Stepper
          question={question}
          name={question.label}
          onChange={onChange(question.label)}
          value={selectedServices[question.label]}
        />
      );
    case 5:
      return (
        <Radio
          question={question}
          name={question.label}
          onChange={onChange(question.label)}
          value={selectedServices[question.label]}
          withImage
        />
      );
    case 6:
      return (
        <Radio
          question={question}
          name={question.label}
          onChange={onChange(question.label)}
          value={selectedServices[question.label]}
        />
      );
    case 8:
      return (
        <TextField
          question={question}
          name={question.label}
          onChange={onChange(question.label)}
          value={selectedServices[question.label]}
        />
      );
    case 9:
      return (
        <Location
          question={question}
          name={question.label}
          onChange={onChange(question.label)}
          value={selectedServices[question.label]}
        />
      );
    case 11:
      return (
        <Time
          question={question}
          name={question.label}
          onChange={onChange(question.label)}
          value={selectedServices[question.label]}
        />
      );
    case 13:
      return (
        <FileUpload
          question={question}
          name={question.label}
          onChange={onChange(question.label)}
          value={selectedServices[question.label]}
        />
      );
    default:
      return null;
  }
};

export default RenderOption;
