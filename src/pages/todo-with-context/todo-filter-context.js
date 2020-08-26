import React from 'react';
import clsx from 'clsx';

import { useTodo } from './todo-provider';
import filterType from 'configs/filter';

const FilterBtn = (props) => {
  return (
    <button
      {...props}
      className={clsx([
        'rounded border-2 h-full p-1 w-24 text-xs text-orange-700 border-orange-400 whitespace-no-wrap transition duration-500 ease-in-out outline-none',
        'hover:bg-orange-400',
        'active:outline-none',
        { 'bg-orange-400 border-orange-400': props.disabled },
      ])}
    />
  );
};

function TodoFilterContext() {
  const { filter, setFilter } = useTodo();
  const { all, complete, notComplete } = filterType;
  return (
    <div className="mt-4 flex items-center space-x-3 lg:mt-0 lg:absolute lg:top-0 lg:-left-32 lg:flex-col lg:items-start lg:space-y-4 lg:space-x-0">
      <p className="text-sm leading-3 font-semibold">Show: </p>
      <FilterBtn
        onClick={() => setFilter(all.value)}
        disabled={filter === all.value}
      >
        {all.label}
      </FilterBtn>
      <FilterBtn
        onClick={() => setFilter(complete.value)}
        disabled={filter === complete.value}
      >
        {complete.label}
      </FilterBtn>
      <FilterBtn
        onClick={() => setFilter(notComplete.value)}
        disabled={filter === notComplete.value}
      >
        {notComplete.label}
      </FilterBtn>
    </div>
  );
}

export default TodoFilterContext;
