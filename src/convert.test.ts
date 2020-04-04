// import { arbitraryQuery } from "../output/output";
import * as Codegen from "./convert";
import * as Types from "./types";

describe("includesOneOf", () => {
  it("Makes any sense whatsoever", () => {
    expect(Codegen.includesOneOf("dog", ["dog"])).toBeTruthy();
  });
  it("Works with multiple", () => {
    expect(Codegen.includesOneOf("dog", ["log", "dog"])).toBeTruthy();
  });
  it("Works with multiple even with nonsense everywhere", () => {
    expect(Codegen.includesOneOf("_____dog___", ["log", "dog"])).toBeTruthy();
  });
  it("Doesn't find something that's not there", () => {
    expect(Codegen.includesOneOf("dog", ["log"])).toBeFalsy();
  });
});

describe("sortASTs", () => {
  it("Puts mentions later", () => {
    const stable: Types.Output = {
      kind: "Object",
      name: "Stable" as Types.TypeName,
      output: "fc.record({horse: arbitraryHorse })" as Types.Generated,
      deps: [],
    };
    const horse: Types.Output = {
      kind: "Object",
      name: "Horse" as Types.TypeName,
      output: "fc.record({saddle: arbitrarySaddle})" as Types.Generated,
      deps: [],
    };
    const saddle: Types.Output = {
      kind: "Object",
      name: "Saddle" as Types.TypeName,
      output: "fc.record({chair: arbitraryChair})" as Types.Generated,
      deps: [],
    };
    const things: Types.Output = {
      kind: "Union",
      name: "Things" as Types.TypeName,
      output: "fc.oneof(arbitraryStable, arbitrarySaddle)" as Types.Generated,
      deps: [],
    };
    const expectedOrder = [saddle, horse, stable, things];
    expect(Codegen.sortASTs([things, stable, horse, saddle])).toStrictEqual(
      expectedOrder
    );
    expect(Codegen.sortASTs([stable, horse, saddle, things])).toStrictEqual(
      expectedOrder
    );
  });

  it("Does the twitter ones", () => {
    const Query: Types.Output = {
      kind: "Object",
      name: "Query" as Types.TypeName,
      output: `fc.record({Tweet: arbitraryTweet,Tweets: fc.array(arbitraryTweet),TweetsMeta: arbitraryMeta,User: arbitraryUser,Notifications: fc.array(arbitraryNotification),NotificationsMeta: arbitraryMeta})` as Types.Generated,
      deps: [],
    };
    const Tweet: Types.Output = {
      kind: "Object",
      name: "Tweet" as Types.TypeName,
      output: `fc.record({id: arbitraryID,body: arbitraryString,date: arbitraryDate,Author: arbitraryUser,Stats: arbitraryStat})` as Types.Generated,
      deps: [],
    };
    const User: Types.Output = {
      kind: "Object",
      name: "User" as Types.TypeName,
      output: `fc.record({id: arbitraryID,username: arbitraryString,first_name: arbitraryString,last_name: arbitraryString,full_name: arbitraryString,name: arbitraryString,avatar_url: arbitraryUrl})` as Types.Generated,
      deps: [],
    };
    const Stat: Types.Output = {
      kind: "Object",
      name: "Stat" as Types.TypeName,
      output: `fc.record({views: arbitraryInt,likes: arbitraryInt,retweets: arbitraryInt,responses: arbitraryInt})` as Types.Generated,
      deps: [],
    };
    const Meta: Types.Output = {
      kind: "Object",
      name: "Meta" as Types.TypeName,
      output: `fc.record({count: arbitraryInt})` as Types.Generated,
      deps: [],
    };

    const Notification: Types.Output = {
      kind: "Object",
      name: "Notification" as Types.TypeName,
      output: `fc.record({id: arbitraryID,date: arbitraryDate,type: arbitraryString})` as Types.Generated,
      deps: [],
    };

    const Mutation: Types.Output = {
      kind: "Object",
      name: "Mutation" as Types.TypeName,
      output: `fc.record({createTweet: arbitraryTweet,deleteTweet: arbitraryTweet,markTweetRead: arbitraryBoolean})` as Types.Generated,
      deps: [],
    };

    const StatOrNotification: Types.Output = {
      kind: "Union",
      name: "StatOrNotification" as Types.TypeName,
      output: `fc.oneof(arbitraryStat, arbitraryNotification)` as Types.Generated,
      deps: [],
    };

    const expectedTweetOrder = [
      User,
      Stat,
      Tweet,
      Meta,
      Notification,
      Query,
      Mutation,
      StatOrNotification,
    ];
    expect(
      Codegen.sortASTs([
        Query,
        Tweet,
        User,
        Stat,
        Meta,
        Notification,
        Mutation,
        StatOrNotification,
      ])
    ).toStrictEqual(expectedTweetOrder);
  });
});
