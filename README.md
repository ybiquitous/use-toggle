# useToggle()

React `useToggle()` utility.

## Install

```shell
npm install @ybiquitous/use-toggle
```

## Usage

```jsx
import useToggle from "@ybiquitous/use-toggle";

function App() {
  const [checked, check, uncheck, toggle] = useToggle();

  return (
    <p>
      <input type="checkbox" checked={checked} />
      <button onClick={check}>Check</button>
      <button onClick={uncheck}>Uncheck</button>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => toggle(true)}>Check via toggle()</button>
      <button onClick={() => toggle(false)}>Uncheck via toggle()</button>
    </p>
  );
}
```
