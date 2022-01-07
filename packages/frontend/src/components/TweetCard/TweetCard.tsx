import { Avatar, Box, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { useSubscription } from "urql";
import Content from "./Content";
import StatusBar from "./StatusBar";
import TweetMeta from "./TweetMeta";

interface Props {
  index: number;
  avatarSrc?: string;
  tweet: {
    id: string;
    text: string;
    likes: number;
    createdAt: string;
  };
  realtimeLikes?: number;
}

const TweetLikedSubscription = `
subscription TweetLikedSubscription($tweetId: String!) {
  tweetLiked(tweetId: $tweetId) {
    likes
  }
}
`;

const PresetAvatarSrc = [
  "https://bit.ly/dan-abramov",
  "https://bit.ly/tioluwani-kolawole",
  "https://bit.ly/kent-c-dodds",
  "https://bit.ly/ryan-florence",
  "https://bit.ly/prosper-baba",
  "https://bit.ly/code-beast",
  "https://bit.ly/sage-adebayo",
];

const getAvatarSrcByIndex = (index: number) => {
  const src = PresetAvatarSrc[index % PresetAvatarSrc.length];
  return src;
};

const handleTweetLikedSubscription = (_: any, current: any) => {
  return current?.tweetLiked;
};

const TweetCard: React.VFC<Props> = ({
  index,
  avatarSrc,
  tweet: { id, text, likes, createdAt },
}) => {
  const avatarSrcToUse = avatarSrc || getAvatarSrcByIndex(index);
  const [resTweetLikedSub] = useSubscription(
    {
      query: TweetLikedSubscription,
      variables: { tweetId: id },
    },
    handleTweetLikedSubscription
  );

  const subscribedTweetLikedData: { likes: number } | undefined =
    resTweetLikedSub.data;

  return (
    <Flex flexDir="row" p="3" border="solid 1px #eee" mt="1px">
      <Avatar src={avatarSrcToUse} />
      <VStack flex="1" ml="3" spacing={0}>
        <TweetMeta createdAt={createdAt} />
        <Content>{text}</Content>
        <StatusBar
          tweetId={id}
          likes={
            subscribedTweetLikedData === undefined
              ? likes
              : subscribedTweetLikedData.likes
          }
        />
      </VStack>
    </Flex>
  );
};

export default React.memo(TweetCard);
