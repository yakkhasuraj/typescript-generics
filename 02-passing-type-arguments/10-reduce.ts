import { expect, it } from "vitest";
import { Equal, Expect } from "../utils";

type User = { name: string };

const array: User[] = [
  {
    name: "John",
  },
  {
    name: "Steve",
  },
];

const obj = array.reduce<Record<string, User>>((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {});

it("Should resolve to an object where name is the key", () => {
  expect(obj).toEqual({
    John: {
      name: "John",
    },
    Steve: {
      name: "Steve",
    },
  });

  type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
