import Select from 'react-select';
import {useField, FieldProps} from "formik";

function CustomSelect(props): JSX.Element {
  const [field, meta, helpers] = useField(props);
  const {setValue} = helpers;

  return (
    <div className="input">
      <Select
        id={props.id}
        name={field.name}
        defaultValue={''}
        onChange={(option: any): void => {
          console.log(option)
          setValue(option.value)
        }}
        options={props.options}
      />
    </div>
  );
}

export default CustomSelect;
