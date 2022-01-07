import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ActionBar from "./ActionBar";
import Hr from "./Hr";

const AddTweet: React.VFC = () => {
  const [tweetContent, setTweetContent] = React.useState("");
  const [completed, setCompleted] = React.useState(false);

  const handleTweetContentChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTweetContent(e.target.value);
    },
    []
  );

  const handleDisplayThanksMessage = React.useCallback(() => {
    setTweetContent("");
    setCompleted(true);

    setTimeout(() => {
      setCompleted(false);
    }, 2000);
  }, []);

  return (
    <Flex flexDir="row">
      <Avatar src="https://bit.ly/dan-abramov" />
      <VStack flex="1" ml="3" spacing={0}>
        {completed ? (
          <Box p={12}>
            <Heading as="h1" size="md" color="green.500">
              Thanks for tweeting!
            </Heading>
          </Box>
        ) : (
          <>
            <Textarea
              color="InfoText"
              resize="vertical"
              placeholder="いまどうしてる？"
              value={tweetContent}
              onChange={handleTweetContentChange}
            />
            <Hr />
            <ActionBar
              tweetContent={tweetContent}
              tweetCallback={handleDisplayThanksMessage}
            />
          </>
        )}
      </VStack>
    </Flex>
  );
};

export default AddTweet;
