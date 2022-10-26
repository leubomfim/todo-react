import * as Styled from './styles';
import P from 'prop-types';

export const Input = ({ type, placeholder, handleChange, name, value }) => {
  return (
    <Styled.Input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
    />
  );
};

Input.propTypes = {
  type: P.string.isRequired,
  placeholder: P.string.isRequired,
  handleChange: P.func.isRequired,
  name: P.string.isRequired,
  value: P.string.isRequired,
};
