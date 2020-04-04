import * as Codegen from "./convert";
import * as Types from "./types";

const stable: Types.Output = {
  kind: "Object",
  name: "Stable" as Types.TypeName,
  output: "fc.record({horse: arbitraryHorse })" as Types.Generated,
  deps: ["Horse" as Types.TypeName]
};
const horse: Types.Output = {
  kind: "Object",
  name: "Horse" as Types.TypeName,
  output: "fc.record({saddle: arbitrarySaddle})" as Types.Generated,
  deps: ["Saddle" as Types.TypeName]
};
const saddle: Types.Output = {
  kind: "Object",
  name: "Saddle" as Types.TypeName,
  output: "fc.record({chair: arbitraryChair})" as Types.Generated,
  deps: []
};
const things: Types.Output = {
  kind: "Union",
  name: "Things" as Types.TypeName,
  output: "fc.oneof(arbitraryStable, arbitrarySaddle)" as Types.Generated,
  deps: ["Stable" as Types.TypeName, "Saddle" as Types.TypeName]
};

describe("sortASTs", () => {
  it("Puts mentions later", () => {
    const expectedOrder = [
      "Saddle" as Types.TypeName,
      "Horse" as Types.TypeName,
      "Stable" as Types.TypeName,
      "Things" as Types.TypeName
    ];
    expect(
      Codegen.sortASTs([things, stable, horse, saddle]).map(a => a.name)
    ).toStrictEqual(expectedOrder);
    expect(
      Codegen.sortASTs([stable, horse, saddle, things]).map(a => a.name)
    ).toStrictEqual(expectedOrder);
  });
});

describe("moveASTs", () => {
  it("Moves everything with zero deps", () => {
    const used: Types.Output[] = [];
    const remaining = [stable, horse, saddle, things];
    const result = Codegen.moveASTs(used, remaining);
    if (result._tag === "Right") {
      expect(result.payload.used.length).toEqual(1);
      expect(result.payload.remaining.length).toEqual(3);
    } else {
      throw "moveASTs failed";
    }
  });
  it("Moves everything with deps that have already been moved across", () => {
    const used = [saddle];
    const remaining = [horse, stable, things];
    const result = Codegen.moveASTs(used, remaining);
    if (result._tag === "Right") {
      expect(result.payload.used.length).toEqual(2);
      expect(result.payload.remaining.length).toEqual(2);
    } else {
      throw "moveASTs failed";
    }
  });
  it("Bruce forces it to a satifying conclusion", () => {
    const remaining = [stable, horse, saddle, things];
    const result = Codegen.magicSort(remaining, 100);
    if (result._tag === "Right") {
      expect(result && result.payload.length).toEqual(4);
    } else {
      throw "fail!";
    }
  });
});
