import React from 'react';
import Select from 'react-select';
import {useField} from 'formik';

function CustomSelect({onChange, ...props}) {
  /*eslint-disable-next-line*/
  const [field, meta, helpers] = useField(props);
  const {setValue} = helpers;

  return (
    <div className="input">
      <Select
        id={props.id}
        name={field.name}
        defaultValue={null}
        onChange={(option) => {
          setValue(option.value);
          onChange({
            name: field.name,
            value: option.value
          });
        }}
        options={props.options}
      />
    </div>
  );
}

export default CustomSelect;
