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

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  const mockData = {
    tweets: [
      {
        id: "1",
        text: "Hello, world!",
        likes: 0,
        createdAt: "2020-01-01T00:00:00.000Z",
      },
      {
        id: "2",
        text: "Hello, world!",
        likes: 0,
        createdAt: "2020-01-01T00:00:00.000Z",
      },
    ],
  };

  return (
    <Box>
      {mockData.tweets.map((tweet: any) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </Box>
  );
};

export default Tweets;
