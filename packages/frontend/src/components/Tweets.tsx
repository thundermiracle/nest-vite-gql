import { Box } from "@chakra-ui/react";
import React from "react";
import { useQuery, useSubscription } from "urql";
import TweetCard from "./TweetCard";

const AllTweetsQuery = `
  query AllTweetsQuery {
    tweets {
      id
      text
      likes
      createdAt
    }
  }
`;

const TweetLikedSubscription = `
subscription TweetLikedSubscription {
  tweetLiked {
    id
    likes
  }
}
`;

const handleTweetLikedSubscription = (_: any, current: any) => {
  return current?.tweetLiked;
};

interface Props {}

const Tweets: React.VFC<Props> = () => {
  const [{ data, fetching, error }] = useQuery({
    query: AllTweetsQuery,
  });
  const [resTweetLikedSub] = useSubscription(
    {
      query: TweetLikedSubscription,
    },
    handleTweetLikedSubscription
  );
  const subscribedTweetLikedData: { id: string; likes: number } | undefined =
    resTweetLikedSub.data;

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box>
      {data.tweets.map((tweet: any, index: number) => {
        let realtimeLikes: number | undefined;
        if (tweet.id === subscribedTweetLikedData?.id) {
          realtimeLikes = subscribedTweetLikedData?.likes;
        }
        return (
          <TweetCard
            key={tweet.id}
            tweet={tweet}
            index={index}
            realtimeLikes={realtimeLikes}
          />
        );
      })}
    </Box>
  );
};

export default Tweets;
