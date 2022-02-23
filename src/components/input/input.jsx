import React from 'react';
import {getForm} from '../../store/selectors';
import {connect} from 'react-redux';

function Input({fields, id, type, name, label, onChange, onBlur}) {
  return (
    <div className="input">
      <input
        type={type}
        id={id}
        name={name}
        value={fields[name]}
        onChange={(evt) => onChange(evt.target)}
        onBlur={(evt) => onBlur(evt.target)}
      />
      <label htmlFor={id}>
        <span className="input__label">{label}</span>
      </label>
    </div>
  );
}

const mapStateToProps = (store) => ({
  fields: getForm(store),
});

export default connect(mapStateToProps)(Input);
