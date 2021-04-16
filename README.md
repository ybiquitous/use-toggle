# useToggle()

[![npm](https://img.shields.io/npm/v/@ybiquitous/use-toggle.svg)](https://www.npmjs.com/package/@ybiquitous/use-toggle)

React `useToggle()` hook utility.

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
