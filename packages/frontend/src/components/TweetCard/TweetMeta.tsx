import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  name?: string;
  accountId?: string;
  createdAt: string;
}

const TweetMeta: React.VFC<Props> = ({ name, accountId, createdAt }) => {
  return (
    <Box w="100%">
      <Box color="InfoText">{name}</Box>
      <Box color="GrayText">{new Date(createdAt).toLocaleString()}</Box>
    </Box>
  );
};

export default TweetMeta;
