import filter, { setFilter, filteredTodo } from '../filterSlice';
import filterType from 'configs/filter';

const { all, complete, notComplete } = filterType;
const todoList = [
  { id: 0, title: 'Shopping', status: false },
  { id: 1, title: 'Shopping again', status: false },
  { id: 2, title: 'Shopping again and again', status: false },
];

test('handle initial state ', () => {
  expect(filter(undefined, {})).toEqual(all.value);
});

test('handle set filter', () => {
  expect(
    filter(all.value, {
      type: setFilter.type,
      payload: complete.value,
    })
  ).toEqual(complete.value);

  expect(
    filter(complete.value, {
      type: setFilter.type,
      payload: notComplete.value,
    })
  ).toEqual(notComplete.value);

  expect(
    filter(notComplete.value, {
      type: setFilter.type,
      payload: all.value,
    })
  ).toEqual(all.value);
});

test('return all todo', () => {
  expect(
    filteredTodo({
      todo: todoList,
      filter: all.value,
    })
  ).toEqual(todoList);
});
test('return only complete todo', () => {
  expect(
    filteredTodo({
      todo: todoList,
      filter: complete.value,
    })
  ).toEqual(todoList.filter((todo) => todo.status));
});

test('return only not complete todo', () => {
  expect(
    filteredTodo({
      todo: todoList,
      filter: notComplete.value,
    })
  ).toEqual(todoList.filter((todo) => !todo.status));
});

test('return empty list if filter is not match', () => {
  expect(
    filteredTodo({
      todo: todoList,
      filter: 'RANDOM',
    })
  ).toEqual([]);
});
