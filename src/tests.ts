import assert from "assert";
import { Brane } from "./brane";

describe("Brane", function () {
  it("should be importable", function () {
    assert.strictEqual(typeof Brane, "function");
  });
});
