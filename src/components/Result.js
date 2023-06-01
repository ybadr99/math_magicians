import React from 'react';

const Result = ({ obj }) => (
  <div id="result">
    {!obj ? (
      <p>0</p>
    ) : (
      <p>
        {obj.next}
        {obj.operation}
        {obj.total}
      </p>
    )}
  </div>
);

export default Result;
