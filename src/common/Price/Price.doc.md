# Price

Display price in format

## Props

| Name        | Default |             Type |                   Description |
| ----------- | :-----: | ---------------: | ----------------------------: |
| `price`     |         | {string, number} |                   price value |
| `salePrice` |    0    | {string, number} |                    sale price |
| `symbol`    |    đ    |         {string} | symbol to display after price |
| `locale`    |    vi-VN    |         {string} | A string with a BCP 47 language tag, ex: en-GB, ja-JP, vi-VN, ko-KR |


## Sample

```jsx
import Price from 'components/Price';

<Price price="5000" />
<Price price="5000" salePrice="4000" />
<Price price="5000" symbol="USD" />
```