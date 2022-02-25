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

const schema = Yup.object().shape({
  address: Yup.string().required('Ошибка ввода'),
  name: Yup.string().required('Ошибка ввода'),
  phone: Yup.string().required('Ошибка ввода'),
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
        {({ isSubmitting }) => (
          <FormikForm>

            <div className="form__grid">
              {formInputs.map((input) => (
                !input.options ?
                  <Input
                    key={input.name + input.id}
                    type={input.type}
                    id={input.id}
                    label={input.label}
                    name={input.name}
                    options={input.options}
                    onChange={handleInputChange}
                    onBlur={handleAddressBlur}
                  />
                  :
                  <CustomSelect
                    key={input.name + input.id}
                    type={input.type}
                    id={input.id}
                    label={input.label}
                    name={input.name}
                    options={input.options}
                    onChange={handleInputChange}
                  />
              ))}
            </div>

            <button type="submit">Submit</button>
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
