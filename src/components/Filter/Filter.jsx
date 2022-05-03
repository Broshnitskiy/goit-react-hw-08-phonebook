import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ filter, handleChange }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="contact name"
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};
