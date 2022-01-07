import { Box, Heading } from "@chakra-ui/react";
import AddTweet from "./components/AddTweet";
import Tweets from "./components/Tweets";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Box p="3" border="solid 1px #eee" borderTop="none" mt="1px">
        <Heading as="h1" size="md" color="InfoText" mb="6">
          ホーム
        </Heading>
        <AddTweet />
      </Box>
      <Tweets />
    </MainLayout>
  );
}

export default App;
