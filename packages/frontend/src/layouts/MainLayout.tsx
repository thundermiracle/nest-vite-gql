import React from "react";
import { Box, Center, Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <Box minH="100vh" color="white" maxW="1300px" m="auto">
      <Flex gap="16px">
        <Center w="250px" bg="blue.200">
          Sidebar
        </Center>
        <Box flex="1">{children}</Box>
        <Center w="350px" bg="InfoText">
          News
        </Center>
      </Flex>
    </Box>
  );
};

export default Layout;
