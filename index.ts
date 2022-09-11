import { useCallback, useState } from "react";

export type ToggleOn = () => void;

export type ToggleOff = () => void;

export type Toggle = () => void;

/**
 * This hook makes it easy to handle a *togglable* (boolean) state.
 *
 * @example
 *
 * ```jsx
 * import useToggle from "@ybiquitous/use-toggle";
 *
 * function ToggleExample() {
 *   const [checked, check, uncheck, toggle] = useToggle();
 *
 *   return (
 *     <fieldset>
 *       <input type="checkbox" checked={checked} onChange={toggle} />
 *       <button onClick={check}>Check</button>
 *       <button onClick={uncheck}>Uncheck</button>
 *     </fieldset>
 *   );
 * }
 * ```
 */
export default function useToggle(initial = false): [boolean, ToggleOn, ToggleOff, Toggle] {
  const [state, setState] = useState(initial);

  const toggleOn = useCallback(() => setState(true), [setState]);
  const toggleOff = useCallback(() => setState(false), [setState]);
  const toggle = useCallback(() => setState((s) => !s), [setState]);

  return [state, toggleOn, toggleOff, toggle];
}
