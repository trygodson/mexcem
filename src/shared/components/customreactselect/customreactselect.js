import Select from 'react-select';
import './customselect.scss';

const customSelectStyles = {
  menu: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '1px solid #888888' : null,
    border: state.isSelected ? '1px solid #888888' : null,
    zIndex: 9999,
  }),

  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    margin: '10px 0',
    padding: '0px 5px 0px 5px',
    border: state.isFocused ? '1px solid #ccc' : '1px solid #ccc',
  }),
  menuPortal: provided => ({ ...provided, zIndex: 9999 }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 10,
    background: '#fff',
  }),
};

const CustomReactSelect = ({
  options,
  name,
  isMulti = false,
  placeholder,
  ...props
}) => {
  return (
    <Select
      name={name}
      styles={customSelectStyles}
      options={options}
      placeholder={placeholder}
      isMulti={isMulti}
      {...props}
    />
  );
};

export default CustomReactSelect;
