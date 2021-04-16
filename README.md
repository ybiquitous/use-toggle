# useToggle()

[![npm](https://img.shields.io/npm/v/@ybiquitous/use-toggle.svg)](https://www.npmjs.com/package/@ybiquitous/use-toggle)

React `useToggle()` utility hook.

- React 16+
- No dependencies
- TypeScript support

## Install

```shell
npm install @ybiquitous/use-toggle
```

## Usage

```jsx
import useToggle from "@ybiquitous/use-toggle";

function Check() {
  const [checked, check, uncheck, toggle] = useToggle();

  return (
    <p>
      <input type="checkbox" checked={checked} onChange={() => toggle()} />
      <button onClick={check}>Check</button>
      <button onClick={uncheck}>Uncheck</button>
      <button onClick={() => toggle(true)}>Toggle with argument</button>
    </p>
  );
}

function Show() {
  const [isShown, show, hide] = useToggle();

  return (
    <p>
      <button onClick={show}>Show</button>
      <button onClick={hide}>Hide</button>
      <br />
      {isShown && <strong>Hello</strong>}
    </p>
  );
}
```

See also the [online demo](https://codesandbox.io/s/vigorous-frost-199yl)!

## Why not useState()

This utility hook aims to reduce the following boilerplate using [`useState()`](https://reactjs.org/docs/hooks-reference.html#usestate):

```jsx
function App() {
  const [isShown, setShown] = useState(false);
  const toggle = setShown((state) => !state);
  const show = () => setShown(true);
  const hide = () => setShown(false);

  const showButton = <button onClick={show}>Show</button>;
  const hideButton = <button onClick={hide}>Hide</button>;

  // ...
}
```

In addition, this package benefits performance by [`useCallback()`](https://reactjs.org/docs/hooks-reference.html#usecallback).
This means that it is equivalent to:

```js
const show = useCallback(() => setShown(true), [setShown]);
```
