# DateTime

Display date time in locale format

## Props

| Name        | Default |     Type |                                                         Description |
| ----------- | :-----: | -------: | ------------------------------------------------------------------: |
| `className` |   ``    | {string} |                                                                     |
| `date`      |         | {string} |                                                       value of date |
| `locale`    |  en-US  | {string} | A string with a BCP 47 language tag, ex: en-GB, ja-JP, vi-VN, ko-KR |
| `option`    |  en-US  | {string} | A string with a BCP 47 language tag, ex: en-GB, ja-JP, vi-VN, ko-KR |

## Sample

```jsx
import DateTime from 'components/DateTime';

<DateTime date="2018-02-02" />
```