import React from 'react';

const Input = (props) => {
   const inputType = props.type || 'text';
   const htmlFor = `${inputType}-${Math.random()}`;

   return (
      <div className="form-group">
         <label htmlFor={htmlFor}>{props.label}</label>
         <input
            type={inputType}
            className="form-control"
            id={htmlFor}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
         />
      </div>
   );
};

export default Input;