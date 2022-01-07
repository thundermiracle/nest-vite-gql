import { HStack } from "@chakra-ui/react";
import React from "react";

import LikeIcon from "./icons/LikeIcon";
import IconText from "./IconText";

interface Props {
  tweetId: string;
  likes: number;
}

const StatusBar: React.VFC<Props> = ({ tweetId, likes }) => {
  return (
    <HStack w="100%" spacing={10} pt={3}>
      <IconText
        icon={<LikeIcon />}
        text={likes > 0 ? likes.toLocaleString() : ""}
      />
    </HStack>
  );
};

export default StatusBar;
