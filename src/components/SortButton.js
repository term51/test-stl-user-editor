import React from 'react';

const SortButton = props => {
   return (
      <button className="btn-sort btn btn-info" onClick={() => props.onToggleSort()}>Sort by name
         {props.isReverseSort ? ' \\/' : ' /\\'}
      </button>
   );
};

export default SortButton;