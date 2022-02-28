import React, {useEffect} from 'react';
import {getForm} from '../../store/selectors';
import {connect} from 'react-redux';
import {Field, useField, ErrorMessage} from 'formik';
import MaskedInput from 'react-text-mask';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import Map from '../map/map';
import {PHONE_MASK} from '../../const';

function Input({
  fields,
  id,
  type,
  label,
  modifier,
  errors,
  touched,
  onChange,
  onBlur,
  ...props
}) {
  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField(props);
  const {setValue} = helpers;

  const value = fields[field.name];
  const error = touched[field.name] && errors[field.name];
  const isFilled = !!value;
  const className = `input${error ? ' is-invalid' : ''}${isFilled ? ' is-filled' : ''} ${modifier}`;

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <>
      <div className={className}>
        {field.name === 'phone' ?
          <MaskedInput
            mask={PHONE_MASK}
            type={type}
            id={id}
            name={field.name}
            value={value}
            onChange={(evt) => {
              onChange(evt.target);
            }}
            onBlur={(evt) => onBlur(evt.target)}
          />
          :
          <Field
            type={type}
            id={id}
            name={field.name}
            value={value}
            onChange={(evt) => {
              onChange(evt.target);
            }}
            onBlur={(evt) => onBlur(evt.target)}
          />}
        <label htmlFor={id}>
          <ErrorMessage
            name={id}
            component="span"
            className="input__error"
          />
          <span className="input__label">{label}</span>
        </label>
      </div>

      {field.name === 'address' && <MediaQuery maxWidth={1023}> <Map /> </MediaQuery>}
    </>
  );
}

Input.propTypes = {
  fields: PropTypes.shape({
    address: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    package: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  modifier: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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
  onBlur: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  fields: getForm(store),
});

export default connect(mapStateToProps)(Input);
