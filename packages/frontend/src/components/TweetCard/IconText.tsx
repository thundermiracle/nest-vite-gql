import { HStack, IconButton, Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  icon: React.ReactElement;
  text: string;
  onClick: () => void;
}

const IconText: React.VFC<Props> = ({ icon, text, onClick }) => {
  return (
    <HStack spacing={2}>
      <IconButton aria-label="likes" icon={icon} onClick={onClick} />
      <Box w="40px" color="InfoText">
        {text}
      </Box>
    </HStack>
  );
};

export default IconText;
