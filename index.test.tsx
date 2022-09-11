import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import useToggle from "./index";

test("initial state", () => {
  const Foo = () => {
    const [checked] = useToggle();
    return <button>{checked ? "checked" : "unchecked"}</button>;
  };
  render(<Foo />);

  expect(screen.getByRole("button")).toHaveTextContent("checked");
});

test("initial state with `true`", () => {
  const Foo = () => {
    const [checked] = useToggle(true);
    return <button>{checked ? "checked" : "unchecked"}</button>;
  };
  render(<Foo />);

  expect(screen.getByRole("button")).toHaveTextContent("checked");
});

test("initial state with `false`", () => {
  const Foo = () => {
    const [checked] = useToggle(false);
    return <button>{checked ? "checked" : "unchecked"}</button>;
  };
  render(<Foo />);

  expect(screen.getByRole("button")).toHaveTextContent("unchecked");
});

test("toggle on", () => {
  const Foo = () => {
    const [checked, check] = useToggle(false);
    return <button onClick={check}>{checked ? "checked" : "unchecked"}</button>;
  };
  render(<Foo />);

  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(button).toHaveTextContent("checked");

  fireEvent.click(button);
  expect(button).toHaveTextContent("checked"); // no change
});

test("toggle off", () => {
  const Foo = () => {
    const [checked, , uncheck] = useToggle(true);
    return <button onClick={uncheck}>{checked ? "checked" : "unchecked"}</button>;
  };
  render(<Foo />);

  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(button).toHaveTextContent("unchecked");

  fireEvent.click(button);
  expect(button).toHaveTextContent("unchecked"); // no change
});

test("toggle switch", () => {
  const Foo = () => {
    const [checked, , , toggle] = useToggle(false);
    return <button onClick={toggle}>{checked ? "checked" : "unchecked"}</button>;
  };
  render(<Foo />);

  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(button).toHaveTextContent("checked");

  fireEvent.click(button);
  expect(button).toHaveTextContent("unchecked");
});
