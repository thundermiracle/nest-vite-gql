import { HStack, IconButton, Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  icon: React.ReactElement;
  text: string;
}

const IconText: React.VFC<Props> = ({ icon, text }) => {
  return (
    <HStack spacing={2}>
      <IconButton aria-label="likes" icon={icon} />
      <Box w="40px">{text}</Box>
    </HStack>
  );
};

export default IconText;
