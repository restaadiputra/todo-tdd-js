import todos, { addTodo, deleteTodoById, updateTodoById } from '../todoSlice';

const todoList = [
  { id: 0, title: 'Shopping', status: false },
  { id: 1, title: 'Shopping again', status: false },
  { id: 2, title: 'Shopping again and again', status: false },
];

test('handle initial state', () => {
  expect(todos(undefined, {})).toEqual([]);
});

test('generate incrementing todo IDs', () => {
  const action1 = addTodo(todoList[0].title);
  const action2 = addTodo(todoList[1].title);
  const action3 = addTodo(todoList[2].title);

  expect(action1.payload).toEqual({ id: 0, title: todoList[0].title });
  expect(action2.payload).toEqual({ id: 1, title: todoList[1].title });
  expect(action3.payload).toEqual({ id: 2, title: todoList[2].title });
});

test('handle add todo', () => {
  expect(
    todos([], {
      type: addTodo.type,
      payload: {
        id: todoList[0].id,
        title: todoList[0].title,
      },
    })
  ).toEqual([todoList[0]]);

  expect(
    todos([todoList[0]], {
      type: addTodo.type,
      payload: {
        id: todoList[1].id,
        title: todoList[1].title,
      },
    })
  ).toEqual([todoList[1], todoList[0]]);

  expect(
    todos([todoList[1], todoList[0]], {
      type: addTodo.type,
      payload: {
        id: todoList[2].id,
        title: todoList[2].title,
      },
    })
  ).toEqual([todoList[2], todoList[1], todoList[0]]);
});

test('delete one todo by id and keep the rest same', () => {
  expect(
    todos([todoList[2], todoList[1], todoList[0]], {
      type: deleteTodoById.type,
      payload: 0,
    })
  ).toEqual([todoList[2], todoList[1]]);
});

test('keep todo list same on delete if the id is not in the todo list', () => {
  expect(
    todos(todoList, {
      type: deleteTodoById.type,
      payload: 3,
    })
  ).toEqual(todoList);
});

test('update one todo status by id and keep the rest same', () => {
  expect(
    todos([todoList[2], todoList[1], todoList[0]], {
      type: updateTodoById.type,
      payload: 0,
    })
  ).toEqual([
    todoList[2],
    todoList[1],
    {
      ...todoList[0],
      status: !todoList[0].status,
    },
  ]);
});

test('keep todo list same on update if the id is not in the todo list', () => {
  expect(
    todos(todoList, {
      type: updateTodoById.type,
      payload: 3,
    })
  ).toEqual(todoList);
});
