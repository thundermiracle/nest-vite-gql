import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useMutation } from "urql";

const createTweetMutation = `
  mutation createTweetMutation($createTweetInput: CreateTweetInput!) {
      createTweet(createTweetInput: $createTweetInput) {
        id
        text
        likes
        createdAt
      }
  }
`;

interface Props {
  tweetContent: string;
  tweetCallback?: () => void;
}

const ActionBar: React.VFC<Props> = ({ tweetContent, tweetCallback }) => {
  const [_, createTweet] = useMutation(createTweetMutation);
  const handleTweet = React.useCallback(async () => {
    await createTweet({
      createTweetInput: {
        text: tweetContent,
      },
    });

    if (tweetCallback) {
      tweetCallback();
    }
  }, [tweetContent]);

  return (
    <Flex w="100%">
      <Box flex="1" />
      <Button
        colorScheme="twitter"
        variant="solid"
        borderRadius="20px"
        disabled={tweetContent?.length === 0}
        onClick={handleTweet}
      >
        ツイートする
      </Button>
    </Flex>
  );
};

export default ActionBar;
