import React from 'react';
import Select, {components} from 'react-select';
import {useField} from 'formik';

const {DropdownIndicator, ValueContainer, Placeholder} = components;

function CustomDropdownIndicator(props) {
  return (
    <DropdownIndicator {...props}>
      <svg width="22" height="22" aria-hidden="true">
        <use xlinkHref="#icon-arrow" />
      </svg>
    </DropdownIndicator>
  );
}

function CustomValueContainer({children, ...props}) {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, child =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
}

function CustomSelect({onChange, errors, touched, ...props}) {
  /*eslint-disable-next-line*/
  const [field, meta, helpers] = useField(props);
  const {setValue} = helpers;
  const error = touched[field.name] && errors[field.name];

  return (
    <div className={`input${error ? ' is-invalid' : ''}`}>
      <Select
        className="custom-select"
        classNamePrefix="custom-select"
        components={{
          DropdownIndicator: CustomDropdownIndicator,
          ValueContainer: CustomValueContainer
        }}
        id={props.id}
        name={field.name}
        placeholder={error ? errors[field.name] : props.label}
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
