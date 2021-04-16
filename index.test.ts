import { act, renderHook } from "@testing-library/react-hooks";
import useToggle from "./index";

test("initial state", () => {
  const { result } = renderHook(() => useToggle());
  const [state] = result.current;
  expect(state).toBe(false);
});

test("initial state with `true`", () => {
  const { result } = renderHook(() => useToggle(true));
  const [state] = result.current;
  expect(state).toBe(true);
});

test("initial state with `false`", () => {
  const { result } = renderHook(() => useToggle(false));
  const [state] = result.current;
  expect(state).toBe(false);
});

test("toggle on", () => {
  const { result } = renderHook(() => useToggle());
  const [, toggleOn] = result.current;

  act(() => {
    toggleOn();
  });

  expect(result.current[0]).toBe(true);

  act(() => {
    toggleOn();
  });

  expect(result.current[0]).toBe(true); // no change
});

test("toggle off", () => {
  const { result } = renderHook(() => useToggle(true));
  const [, , toggleOff] = result.current;

  act(() => {
    toggleOff();
  });

  expect(result.current[0]).toBe(false);

  act(() => {
    toggleOff();
  });

  expect(result.current[0]).toBe(false); // no change
});

test("toggle switch", () => {
  const { result } = renderHook(() => useToggle());
  const [, , , toggle] = result.current;

  act(() => {
    toggle();
  });

  expect(result.current[0]).toBe(true);

  act(() => {
    toggle();
  });

  expect(result.current[0]).toBe(false);
});
