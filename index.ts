import { useCallback, useState } from "react";

export type ToggleOn = () => void;

export type ToggleOff = () => void;

export type Toggle = () => void;

export default function useToggle(initial = false): [boolean, ToggleOn, ToggleOff, Toggle] {
  const [state, setState] = useState(initial);

  const toggleOn = useCallback(() => setState(true), [setState]);
  const toggleOff = useCallback(() => setState(false), [setState]);
  const toggle = useCallback(() => setState((s) => !s), [setState]);

  return [state, toggleOn, toggleOff, toggle];
}
