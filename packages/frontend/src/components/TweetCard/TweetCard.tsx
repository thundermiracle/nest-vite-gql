import { Avatar, Box, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Content from "./Content";
import StatusBar from "./StatusBar";
import TweetMeta from "./TweetMeta";

interface Props {
  avatarSrc?: string;
  tweet: {
    id: string;
    text: string;
    likes: number;
    createdAt: string;
  };
}

const PresetAvatarSrc = [
  "https://bit.ly/dan-abramov",
  "https://bit.ly/tioluwani-kolawole",
  "https://bit.ly/kent-c-dodds",
  "https://bit.ly/ryan-florence",
  "https://bit.ly/prosper-baba",
  "https://bit.ly/code-beast",
  "https://bit.ly/sage-adebayo",
];

const getRandomAvatarSrc = () => {
  const randomIndex = Math.floor(Math.random() * PresetAvatarSrc.length);
  return PresetAvatarSrc[randomIndex];
};

const TweetCard: React.VFC<Props> = ({
  avatarSrc,
  tweet: { id, text, likes, createdAt },
}) => {
  return (
    <Flex flexDir="row" p="3" border="solid 1px #eee" mt="1px">
      <Avatar src={avatarSrc || getRandomAvatarSrc()} />
      <VStack flex="1" ml="3" spacing={0}>
        <TweetMeta createdAt={createdAt} />
        <Content>{text}</Content>
        <StatusBar tweetId={id} likes={likes} />
      </VStack>
    </Flex>
  );
};

export default TweetCard;
