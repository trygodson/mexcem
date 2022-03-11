import Select from 'react-select';

const customSelectStyles = {
  menu: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '1px solid #888888' : null,
    border: state.isSelected ? '1px solid #888888' : null,
  }),

  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    borderColor: '#888888',
    border: '1px solid #888888',
    margin: '10px 0',
    padding: '0px 10px 0px 10px',
    border: state.isFocused ? '1px solid #888888' : null,
    border: state.isSelected ? '1px solid #888888' : null,
  }),

  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    zIndex: '10000000',
    padding: 10,
  }),
};

const MultiSelect = props => {
  return (
    <Select
      name="city"
      styles={customSelectStyles}
      options={props.options}
      placeholder="users"
      isMulti={true}
    />
  );
};

export default MultiSelect;
