import React from 'react';
import {Formik, Form as FormikForm} from 'formik';
import Input from '../input/input';
import CustomSelect from '../custom-select/custom-select';

const options = [
  {value: 'no', label: 'без упаковки'},
  {value: 'standard', label: 'стандартная'},
  {value: 'gift', label: 'подарочная'},
];

const formInputs = [
  {
    type: 'text',
    id: 'address',
    label: 'Адрес',
    name: 'address',
  },
  {
    type: 'text',
    id: 'name',
    label: 'Ваше Имя',
    name: 'name',
  },
  {
    type: 'number',
    id: 'phone',
    label: 'Ваш Телефон',
    name: 'phone',
  },
  {
    type: 'email',
    id: 'email',
    label: 'Ваш Email',
    name: 'email',
  },
  {
    type: 'select',
    id: 'package',
    label: 'Тип Упаковки',
    name: 'package',
    options
  },
  {
    type: 'text',
    id: 'comment',
    label: 'Введите комментарий',
    name: 'comment',
  },
];

function Form() {
  return (
    <div className="form">
      <Formik
        initialValues={{
          address: '',
          name: '',
          phone: '',
          email: '',
          package: '',
          comment: '',
        }}
        onSubmit={(
          values,
          {setSubmitting}
        ) => {
          setTimeout(() => {
            /*eslint-disable-next-line*/
            console.log();
            /*eslint-disable-next-line*/
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <FormikForm>
          {formInputs.map((input) => (
            !input.options ?
              <Input
                key={input.name + input.id}
                type={input.type}
                id={input.id}
                label={input.label}
                name={input.name}
                options={input.options}
              />
              :
              <CustomSelect
                key={input.name + input.id}
                type={input.type}
                id={input.id}
                label={input.label}
                name={input.name}
                options={options}
              />
          ))}
          <button type="submit">Submit</button>
        </FormikForm>
      </Formik>
    </div>
  );
}

export default Form;
