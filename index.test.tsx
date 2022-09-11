import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import useToggle from "./index";

test("initial state", () => {
  const Foo = () => {
    const [checked] = useToggle();
    return <button>{`checked: ${checked}`}</button>;
  };
  render(<Foo />);

  expect(screen.getByRole("button")).toHaveTextContent("checked: false");
});

test("initial state with `true`", () => {
  const Foo = () => {
    const [checked] = useToggle(true);
    return <button>{`checked: ${checked}`}</button>;
  };
  render(<Foo />);

  expect(screen.getByRole("button")).toHaveTextContent("checked: true");
});

test("initial state with `false`", () => {
  const Foo = () => {
    const [checked] = useToggle(false);
    return <button>{`checked: ${checked}`}</button>;
  };
  render(<Foo />);

  expect(screen.getByRole("button")).toHaveTextContent("checked: false");
});

test("toggle on", () => {
  const Foo = () => {
    const [checked, check] = useToggle(false);
    return <button onClick={check}>{`checked: ${checked}`}</button>;
  };
  render(<Foo />);

  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(button).toHaveTextContent("checked: true");

  fireEvent.click(button);
  expect(button).toHaveTextContent("checked: true"); // no change
});

test("toggle off", () => {
  const Foo = () => {
    const [checked, , uncheck] = useToggle(true);
    return <button onClick={uncheck}>{`checked: ${checked}`}</button>;
  };
  render(<Foo />);

  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(button).toHaveTextContent("checked: false");

  fireEvent.click(button);
  expect(button).toHaveTextContent("checked: false"); // no change
});

test("toggle switch", () => {
  const Foo = () => {
    const [checked, , , toggle] = useToggle(false);
    return <button onClick={toggle}>{`checked: ${checked}`}</button>;
  };
  render(<Foo />);

  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(button).toHaveTextContent("checked: true");

  fireEvent.click(button);
  expect(button).toHaveTextContent("checked: false");
});
