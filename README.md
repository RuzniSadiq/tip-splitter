# tip-splitter

`splitBill(total, people, tipPercent = 10)` works out how much each person
owes when a bill is shared evenly. It adds a tip to the total (10% unless you
pass a different `tipPercent`), divides the result by the number of people, and
rounds each share to the nearest cent (two decimal places). If `people` is 0 or
less, it throws an `Error`.

## Usage

```js
import { splitBill } from "./src/split.js";

console.log(splitBill(100, 4));
// 27.5
```

A $100 bill plus the default 10% tip comes to $110, so each of 4 people pays $27.50.

## Development

```sh
npm run check   # syntax check
npm test        # node:test suite
```
