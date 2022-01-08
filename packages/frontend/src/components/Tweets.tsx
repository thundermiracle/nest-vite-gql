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

const TweetAddedSubscription = `
  subscription TweetAddedSubscription {
    tweetCreated {
    id
    text
    likes
    createdAt
  }
}
`;

const handleTweetAddedSubscription = (_: any, current: any) => {
  return current?.tweetCreated;
};

interface Props {}

const Tweets: React.VFC<Props> = () => {
  const [{ data, fetching, error }] = useQuery({
    query: AllTweetsQuery,
  });

  const [resTweetCreated] = useSubscription(
    {
      query: TweetAddedSubscription,
    },
    handleTweetAddedSubscription
  );

  const tweetCardBySubscription = React.useMemo(() => {
    if (
      !resTweetCreated.data ||
      data.tweets
        .map((tweet: any) => tweet.id)
        .includes(resTweetCreated.data.id)
    ) {
      return null;
    }

    return <TweetCard index={0} tweet={resTweetCreated.data} />;
  }, [resTweetCreated.data, data?.tweets]);

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box>
      {tweetCardBySubscription}
      {data.tweets.map((tweet: any, index: number) => {
        return <TweetCard key={tweet.id} tweet={tweet} index={index} />;
      })}
    </Box>
  );
};

export default Tweets;
