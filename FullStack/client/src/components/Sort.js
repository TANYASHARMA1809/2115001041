import React from 'react';

const Sort = ({ set }) => {
  const Change = (e) => {
    set(e.target.value);
  };

  return (
    <div>
      <select onChange={Change}>
        <option value="">Sorting By</option>
        <option value="price">Price</option>
        <option value="rating">Rateingg</option>
        <option value="discount">Dis</option>
      </select>
    </div>
  );
};

export default Sort;