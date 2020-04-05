import * as generated from "./twitter/output";
import * as fc from "fast-check";

const items: any = { ...generated };

Object.keys(items).forEach((key: string) => {
  const func = items[key];
  console.log(`---------------${key}-----------------`);
  const arb = (func as any)();
  fc.assert(
    fc.property(arb, a => {
      console.log(a);
      return true;
    })
  );
});
