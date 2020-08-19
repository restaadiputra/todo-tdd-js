import React from "react";
import { render, cleanup } from "@testing-library/react";
import TodoDisplay from "./todo-display";

const emptyTodo = [];
const todo = [
  {
    title: "Shopping",
    priority: "high",
    status: "active",
  },
  {
    title: "Shopping again",
    priority: "high",
    status: "active",
  },
  {
    title: "Shopping again and again",
    priority: "low",
    status: "active",
  },
];

afterEach(cleanup);

describe("TodoDisplay Component", () => {
  test("should render without error", () => {
    render(<TodoDisplay />);
  });

  test("display empty wording if prop 'todo' is undefined", () => {
    const { getByText } = render(<TodoDisplay />);
    expect(getByText(/todo is empty/i)).toBeInTheDocument();
  });

  test("display empty wording if prop 'todo' is empty array", () => {
    const { getByText } = render(<TodoDisplay todo={emptyTodo} />);
    expect(getByText(/todo is empty/i)).toBeInTheDocument();
  });

  test("display todo list if todo is not empty array or undefined", () => {
    const { container, getByText } = render(<TodoDisplay todo={todo} />);
    expect(container.firstElementChild.childElementCount).toBe(3);
    expect(getByText(todo[0].title)).toBeInTheDocument();
    expect(getByText(todo[1].title)).toBeInTheDocument();
    expect(getByText(todo[2].title)).toBeInTheDocument();
  });
});
