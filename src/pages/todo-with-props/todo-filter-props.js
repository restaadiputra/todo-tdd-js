import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import filterType from 'configs/filter';

const FilterBtn = (props) => {
  return (
    <button
      {...props}
      className={clsx([
        'rounded border-2 h-full p-1 w-24 text-xs text-gray-700 border-gray-400 whitespace-no-wrap transition duration-500 ease-in-out outline-none',
        'hover:bg-gray-400',
        'active:outline-none',
        { 'bg-gray-400 border-gray-400': props.disabled },
      ])}
    />
  );
};

function TodoFilterProps({ onFilter, filter }) {
  const { all, complete, notComplete } = filterType;
  return (
    <div className="mt-4 flex items-center space-x-3 lg:mt-0 lg:absolute lg:top-0 lg:-left-32 lg:flex-col lg:items-start lg:space-y-4 lg:space-x-0">
      <p className="text-sm leading-3 font-semibold">Show: </p>
      <FilterBtn
        onClick={() => onFilter(all.value)}
        disabled={filter === all.value}
      >
        {all.label}
      </FilterBtn>
      <FilterBtn
        onClick={() => onFilter(complete.value)}
        disabled={filter === complete.value}
      >
        {complete.label}
      </FilterBtn>
      <FilterBtn
        onClick={() => onFilter(notComplete.value)}
        disabled={filter === notComplete.value}
      >
        {notComplete.label}
      </FilterBtn>
    </div>
  );
}

TodoFilterProps.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TodoFilterProps;
