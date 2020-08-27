import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';

import filterType from 'configs/filter';
import { selectFilter, setFilter } from 'store/filterSlice';

const FilterBtn = (props) => {
  return (
    <button
      {...props}
      className={clsx([
        'rounded border-2 h-full p-1 w-24 text-xs text-purple-700 border-purple-400 whitespace-no-wrap transition duration-500 ease-in-out outline-none',
        'hover:bg-purple-400',
        'active:outline-none',
        { 'bg-purple-400 border-purple-400': props.disabled },
      ])}
    />
  );
};

function TodoFilterContext() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const { all, complete, notComplete } = filterType;
  return (
    <div className="mt-4 flex items-center space-x-3 lg:mt-0 lg:absolute lg:top-0 lg:-left-32 lg:flex-col lg:items-start lg:space-y-4 lg:space-x-0">
      <p className="text-sm leading-3 font-semibold">Show: </p>
      <FilterBtn
        onClick={() => dispatch(setFilter(all.value))}
        disabled={filter === all.value}
      >
        {all.label}
      </FilterBtn>
      <FilterBtn
        onClick={() => dispatch(setFilter(complete.value))}
        disabled={filter === complete.value}
      >
        {complete.label}
      </FilterBtn>
      <FilterBtn
        onClick={() => dispatch(setFilter(notComplete.value))}
        disabled={filter === notComplete.value}
      >
        {notComplete.label}
      </FilterBtn>
    </div>
  );
}

export default TodoFilterContext;
