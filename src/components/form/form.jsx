import React from 'react';
import {Formik, Form as FormikForm} from 'formik';
import * as Yup from 'yup';
import Input from '../input/input';
import CustomSelect from '../custom-select/custom-select';
import {fetchCoords} from '../../store/api-actions';
import {connect} from 'react-redux';
import {getForm} from '../../store/selectors';
import {changeFormData, changeMarkerFlag} from '../../store/action';
import {formInputs} from '../../const';
import Products from '../products/products';

const REG_EXP = '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$';

const schema = Yup.object().shape({
  address: Yup.string().required('Ошибка ввода'),
  name: Yup.string().required('Ошибка ввода'),
  phone: Yup.string().matches(REG_EXP, 'Неправильный формат номера').required('Ошибка ввода'),
  email: Yup.string().email('Введите корректный емейл').required('Ошибка ввода'),
  package: Yup.string().required('Ошибка ввода'),
  comment: Yup.string(),
});

function Form({fields, setForm, setMarkerFlag, fetchCoords}) {
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

      fetchCoords(fields[name]);
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
            // const ValuesData = JSON.stringify(values, null, 2);
            /*eslint-disable-next-line*/
            console.log(JSON.stringify(values, null, 2));
            /*eslint-disable-next-line*/
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
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

            <button className="form__submit" type="submit" disabled={isSubmitting}>Купить</button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}

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
  fetchCoords(address) {
    dispatch(fetchCoords(address));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
