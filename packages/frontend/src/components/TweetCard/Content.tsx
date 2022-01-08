import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Content: React.VFC<Props> = ({ children }) => {
  return (
    <Box w="100%" color="InfoText" whiteSpace="pre-line">
      {children}
    </Box>
  );
};

export default Content;
