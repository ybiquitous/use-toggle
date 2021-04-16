# useToggle()

This package is a React `useToggle()` utility.

## Install

```shell
npm install @ybiquitous/use-toggle
```

## Usage

```jsx
import { useToggle } from "@ybiquitous/use-toggle"

function App() {
  const [yesOrNo, yes, no, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>{yesOrNo ? 'Yes' : 'No'}</button>
      <button onClick={yes}>Say 'Yes'</button>
      <button onClick={no}>Say 'No'</button>
    </div>
  )
}
```
