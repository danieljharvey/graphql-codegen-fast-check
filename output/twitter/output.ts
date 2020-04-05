import * as fc from "fast-check";
export const getArbitraryQuery = (): fc.Arbitrary<any> =>
  fc.record({
    Tweet: getArbitraryTweet(),
    Tweets: fc.array(getArbitraryTweet()),
    TweetsMeta: getArbitraryMeta(),
    User: getArbitraryUser(),
    Notifications: fc.array(getArbitraryNotification()),
    NotificationsMeta: getArbitraryMeta(),
  });

export const getArbitraryID = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryTweet = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    body: getArbitraryString(),
    date: getArbitraryDate(),
    Author: getArbitraryUser(),
    Stats: getArbitraryStat(),
  });

export const getArbitraryString = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryDate = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryUser = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    username: getArbitraryString(),
    first_name: getArbitraryString(),
    last_name: getArbitraryString(),
    full_name: getArbitraryString(),
    name: getArbitraryString(),
    avatar_url: getArbitraryUrl(),
  });

export const getArbitraryUrl = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryStat = (): fc.Arbitrary<any> =>
  fc.record({
    views: getArbitraryInt(),
    likes: getArbitraryInt(),
    retweets: getArbitraryInt(),
    responses: getArbitraryInt(),
  });

export const getArbitraryInt = (): fc.Arbitrary<any> => fc.integer();

export const getArbitraryMeta = (): fc.Arbitrary<any> =>
  fc.record({ count: getArbitraryInt() });

export const getArbitraryNotification = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    date: getArbitraryDate(),
    type: getArbitraryString(),
  });

export const getArbitraryMutation = (): fc.Arbitrary<any> =>
  fc.record({
    createTweet: getArbitraryTweet(),
    deleteTweet: getArbitraryTweet(),
    markTweetRead: getArbitraryBoolean(),
  });

export const getArbitraryBoolean = (): fc.Arbitrary<any> => fc.boolean();

export const getArbitraryActionExecutionCapabilitySetting = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("ALL_ACTIONS"),
    fc.constant("DISABLED"),
    fc.constant("LOCAL_ACTIONS_ONLY"),
    fc.constant("NO_POLICY")
  );

export const getArbitraryAddCommentInput = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryStatOrNotification = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryStat(), getArbitraryNotification());
