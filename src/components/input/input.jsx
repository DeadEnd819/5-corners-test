import React, {useEffect} from 'react';
import {getForm} from '../../store/selectors';
import {connect} from 'react-redux';
import {Field, useField, ErrorMessage} from 'formik';
import MaskedInput from 'react-text-mask';

const phoneNumberMask = ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

function Input({fields, id, type, label, modifier, onChange, onBlur, ...props}) {
  /*eslint-disable-next-line*/
  const [field, meta, helpers] = useField(props);
  const {setValue} = helpers;

  const value = fields[field.name];
  const error = meta.error;
  const isFilled = !!value;
  const className = `input${error ? ' s-invalid' : ''}${isFilled ? ' is-filled' : ''} ${modifier}`;

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <div className={className}>
      {field.name === 'phone' ?
        <MaskedInput
          mask={phoneNumberMask}
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
  );
}

const mapStateToProps = (store) => ({
  fields: getForm(store),
});

export default connect(mapStateToProps)(Input);
