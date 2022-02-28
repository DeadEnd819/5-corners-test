import React from 'react';
import PropTypes from 'prop-types';
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

// eslint-disable-next-line react/prop-types
function CustomValueContainer({children, ...props}) {
  return (
    <ValueContainer {...props}>
      {/* eslint-disable-next-line react/prop-types */}
      <Placeholder {...props} isFocused={props.isFocused}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
}

function CustomSelect({onChange, errors, touched, ...props}) {
  // eslint-disable-next-line no-unused-vars
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

CustomSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  errors: PropTypes.shape({
    address: PropTypes.string,
    comment: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    package: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  touched: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
