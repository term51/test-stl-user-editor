import React from 'react';

const Select = (props) => {
   const htmlFor = `select-${Math.random()}`;

   return (
      <div className="form-group">
         <label htmlFor={htmlFor}>{props.label}</label>
         <select
            name={props.name}
            value={props.value}
            className="form-control"
            id={htmlFor}
            onChange={props.onChange}
         >
            {
               props.options.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
               ))
            }
         </select>
      </div>
   );
};

export default Select;