import React from 'react';

const InputNums = ({ value, onChange }) => {
  return (
    <div>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default InputNums;
