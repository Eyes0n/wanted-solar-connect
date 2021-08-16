import React from 'react';

const Result = ({ value }) => {
  return (
    <div>
      <p>{value || '정렬할 입력값을 넣어주세요'}</p>
    </div>
  );
};

export default Result;
