import { Box } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "urql";
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

interface Props {}

const Tweets: React.VFC<Props> = () => {
  const [{ data, fetching, error }] = useQuery({
    query: AllTweetsQuery,
  });

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box>
      {data.tweets.map((tweet: any, index: number) => {
        return <TweetCard key={tweet.id} tweet={tweet} index={index} />;
      })}
    </Box>
  );
};

export default Tweets;
