# InputNumber

## Props

| Name           | Default |       Type |                                                  Description |
| -------------- | :-----: | ---------: | -----------------------------------------------------------: |
| `onChange`     |         | {function} | Called on change. onChange(event: ChangeEvent, value: number) |
| `min`          |   `1`   |   {Number} |                                                minimum value |
| `max`          |  `10`   |   {Number} |                                                maximum value |
| `step`         |   `1`   |   {Number} |                                              increment value |
| `className`    |  `''`   |   {string} |                                                              |

## Sample

```jsx
import InputNumber from 'components/InputNumber';

const changeValue = (e, value) => { console.log(value) }

<InputNumber onChange={changeValue} />
<InputNumber defaultValue={7} min={1} max={20} />
```