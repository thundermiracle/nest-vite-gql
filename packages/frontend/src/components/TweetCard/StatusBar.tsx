import { HStack } from "@chakra-ui/react";
import React from "react";
import { useMutation } from "urql";

import LikeIcon from "./icons/LikeIcon";
import IconText from "./IconText";

const AddLikeMutation = `
mutation Mutation($addLikeId: String!) {
  addLike(id: $addLikeId) {
    id
    likes
    text
    createdAt
  }
}
`;

interface Props {
  tweetId: string;
  likes: number;
}

const StatusBar: React.VFC<Props> = ({ tweetId, likes }) => {
  const [_, addLike] = useMutation(AddLikeMutation);

  const handleAddLike = React.useCallback(() => {
    addLike({ addLikeId: tweetId });
  }, [addLike, tweetId]);

  return (
    <HStack w="100%" spacing={10} pt={3}>
      <IconText
        icon={<LikeIcon />}
        text={likes > 0 ? likes.toLocaleString() : ""}
        onClick={handleAddLike}
      />
    </HStack>
  );
};

export default StatusBar;
