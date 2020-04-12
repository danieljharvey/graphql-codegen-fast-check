import * as twitter from "../output/twitter/output";
import * as github from "../output/github/output";
import * as fc from "fast-check";

const twitterItems: any = { ...twitter };

Object.keys(twitterItems)
  .map((key: string) => {
    const func = twitterItems[key];
    const arb = (func as any)();
    return [key, fc.sample(arb, 1)[0]];
  })
  .map(console.log);

const githubItems: any = { ...github };

console.log("github has ", Object.keys(githubItems).length, " items");

const someKeys = Object.keys(githubItems); // .slice(0, 110);

console.log("lets try out ", someKeys.length, " first");

// we can override this for fucking huge things that blow the stack
const recurseLimit = 4;

someKeys
  .map((key: string) => {
    const func = githubItems[key];
    const arb = (func as any)(recurseLimit);
    return [key, fc.sample(arb, 1)[0]];
  })
  .map(console.log);
