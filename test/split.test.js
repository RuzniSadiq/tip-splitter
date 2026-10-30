import { test } from "node:test";
import assert from "node:assert/strict";
import { splitBill } from "../src/split.js";

test("splits evenly with default 10% tip", () => {
  assert.equal(splitBill(100, 4), 27.5);
});

test("rejects zero people", () => {
  assert.throws(() => splitBill(100, 0));
});