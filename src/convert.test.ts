// import { arbitraryQuery } from "../output/output";
import * as Codegen from "./convert";

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
    const stable: Codegen.NamedType = [
      "Object",
      "Stable" as Codegen.TypeName,
      "fc.record({horse: arbitraryHorse })"
    ];
    const horse: Codegen.NamedType = [
      "Object",
      "Horse" as Codegen.TypeName,
      "fc.record({saddle: arbitrarySaddle})"
    ];
    const saddle: Codegen.NamedType = [
      "Object",
      "Saddle" as Codegen.TypeName,
      "fc.record({chair: arbitraryChair})"
    ];
    const things: Codegen.NamedType = [
      "Union",
      "Things" as Codegen.TypeName,
      "fc.oneof(arbitraryStable, arbitrarySaddle)"
    ];
    const expectedOrder = [saddle, horse, stable, things];
    expect(Codegen.sortASTs([things, stable, horse, saddle])).toStrictEqual(
      expectedOrder
    );
    expect(Codegen.sortASTs([stable, horse, saddle, things])).toStrictEqual(
      expectedOrder
    );
  });

  it("Does the twitter ones", () => {
    const Query: Codegen.NamedType = [
      "Object",
      "Query" as Codegen.TypeName,
      `fc.record({Tweet: arbitraryTweet,Tweets: fc.array(arbitraryTweet),TweetsMeta: arbitraryMeta,User: arbitraryUser,Notifications: fc.array(arbitraryNotification),NotificationsMeta: arbitraryMeta})`
    ];
    const Tweet: Codegen.NamedType = [
      "Object",
      "Tweet" as Codegen.TypeName,
      `fc.record({id: arbitraryID,body: arbitraryString,date: arbitraryDate,Author: arbitraryUser,Stats: arbitraryStat})`
    ];
    const User: Codegen.NamedType = [
      "Object",
      "User" as Codegen.TypeName,
      `fc.record({id: arbitraryID,username: arbitraryString,first_name: arbitraryString,last_name: arbitraryString,full_name: arbitraryString,name: arbitraryString,avatar_url: arbitraryUrl})`
    ];
    const Stat: Codegen.NamedType = [
      "Object",
      "Stat" as Codegen.TypeName,
      `fc.record({views: arbitraryInt,likes: arbitraryInt,retweets: arbitraryInt,responses: arbitraryInt})`
    ];
    const Meta: Codegen.NamedType = [
      "Object",
      "Meta" as Codegen.TypeName,
      `fc.record({count: arbitraryInt})`
    ];
    const Notification: Codegen.NamedType = [
      "Object",
      "Notification" as Codegen.TypeName,
      `fc.record({id: arbitraryID,date: arbitraryDate,type: arbitraryString})`
    ];
    const Mutation: Codegen.NamedType = [
      "Object",
      "Mutation" as Codegen.TypeName,
      `fc.record({createTweet: arbitraryTweet,deleteTweet: arbitraryTweet,markTweetRead: arbitraryBoolean})`
    ];
    const StatOrNotification: Codegen.NamedType = [
      "Union",
      "StatOrNotification" as Codegen.TypeName,
      `fc.oneof(arbitraryStat, arbitraryNotification)`
    ];

    const expectedTweetOrder = [
      User,
      Stat,
      Tweet,
      Meta,
      Notification,
      Query,
      Mutation,
      StatOrNotification
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
        StatOrNotification
      ])
    ).toStrictEqual(expectedTweetOrder);
  });
});
