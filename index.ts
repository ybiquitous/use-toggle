import { useCallback, useState } from "react";

export type ToggleOn = () => void;

export type ToggleOff = () => void;

export type Toggle = (nextState?: boolean) => void;

export default function useToggle(initial = false): [boolean, ToggleOn, ToggleOff, Toggle] {
  const [state, setState] = useState(initial);

  const toggle: Toggle = useCallback(
    (nextState) => {
      if (typeof nextState === "boolean") {
        setState(nextState);
      } else {
        setState((s) => !s);
      }
    },
    [setState]
  );

  const toggleOn = useCallback(() => toggle(true), [toggle]);
  const toggleOff = useCallback(() => toggle(false), [toggle]);

  return [state, toggleOn, toggleOff, toggle];
}
