import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Formik, Form as FormikForm} from 'formik';
import MediaQuery from 'react-responsive';
import * as yup from 'yup';
import Input from '../input/input';
import CustomSelect from '../custom-select/custom-select';
import Total from '../total/total';
import Products from '../products/products';
import {fetchCoords} from '../../store/api-actions';
import {getForm} from '../../store/selectors';
import {changeFormData, changeMarkerFlag} from '../../store/action';
import {formInputs, PHONE_REG_EXP} from '../../const';


const schema = yup.object().shape({
  address: yup.string().required('Ошибка ввода'),
  name: yup.string().required('Ошибка ввода'),
  phone: yup.string().matches(PHONE_REG_EXP, 'Неправильный формат').required('Ошибка ввода'),
  email: yup.string().email('Введите корректный емейл').required('Ошибка ввода'),
  package: yup.string().required('Ошибка ввода'),
  comment: yup.string(),
});

function Form({fields, setForm, setMarkerFlag, getAddress}) {
  const handleInputChange = ({name, value}) => {
    setForm({[name]: value});

    if (name === 'address' && !value) {
      setMarkerFlag(false);
    }
  };

  const handleAddressBlur = ({name, value}) => {
    if (name === 'address') {
      if (!value) {
        setMarkerFlag(false);
        return;
      }

      getAddress(fields[name]);
    }
  };

  return (
    <div className="form">
      <Formik
        initialValues={fields}
        validationSchema={schema}
        onSubmit={(
          values,
          {setSubmitting}
        ) => {
          setTimeout(() => {
            const valuesData = JSON.stringify(values, null, 2);
            // eslint-disable-next-line no-console
            console.log(valuesData);
            // eslint-disable-next-line no-alert
            alert(valuesData);
            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          isSubmitting,
          errors,
          touched
        }) => (
          <FormikForm>

            <div className="form__grid">
              {formInputs.map((input) => (
                !input.options ?
                  <Input
                    {...input}
                    key={input.name + input.id}
                    errors={errors}
                    touched={touched}
                    onChange={handleInputChange}
                    onBlur={handleAddressBlur}
                  />
                  :
                  <CustomSelect
                    {...input}
                    key={input.name + input.id}
                    errors={errors}
                    touched={touched}
                    onChange={handleInputChange}
                  />
              ))}
            </div>

            <Products />

            <MediaQuery maxWidth={1023}> <Total value={3790}/> </MediaQuery>

            <button className="form__submit" type="submit" disabled={isSubmitting}>Купить</button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}

Form.propTypes = {
  fields: PropTypes.shape({
    address: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    package: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  setForm: PropTypes.func.isRequired,
  setMarkerFlag: PropTypes.func.isRequired,
  getAddress: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  fields: getForm(store),
});

const mapDispatchToProps = (dispatch) => ({
  getAddress(address) {
    dispatch(fetchCoords(address));
  },
  setForm(data) {
    dispatch(changeFormData(data));
  },
  setMarkerFlag(flag) {
    dispatch(changeMarkerFlag(flag));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
