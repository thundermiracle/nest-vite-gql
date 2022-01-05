import React from "react";
import { useQuery } from "urql";

const AllTweetsQuery = `
  query AllTweetsQuery {
    tweets {
      id
      text
      createdAt
    }
  }
`;

interface Props {}

const Tweets: React.VFC<Props> = () => {
  const [{ data, fetching }] = useQuery({
    query: AllTweetsQuery,
  });

  if (fetching) {
    return <div>Loading...</div>;
  }

  return (
    <ol>
      {data.tweets.map(
        (tweet: { id: string; text: string; createdAt: string }) => (
          <li key={tweet.id}>
            {tweet.text}
            <br />
            {new Date(Number(tweet.createdAt)).toLocaleString()}
          </li>
        )
      )}
    </ol>
  );
};

export default Tweets;
