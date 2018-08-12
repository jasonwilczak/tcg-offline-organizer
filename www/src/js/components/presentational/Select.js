import React from "react";
import PropTypes from "prop-types";
const Select = ({ label, text, id, value, handleChange,options }) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <select
      className="form-control"
      id={id}
      onChange={handleChange}
      required
    >
      {
        (options ||[]).map(function (item) {
            return <option value={item.value}>{item.text}</option>;
        })
      }
    </select>
  </div>
);
Select.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};
export default Select;