import { Button, useColorMode, Flex, Heading, Text } from "@chakra-ui/react";
import Countdown from "./Countdown";

function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      direction="column"
      w="full"
      h="full"
      align="center"
      justify="center"
      gap={3}
    >
      <Heading size="sm">Time left until illuminate opening night:</Heading>
      <Countdown />
      <Button onClick={toggleColorMode}>Toggle Dark Mode</Button>
    </Flex>
  );
}

export default App;
