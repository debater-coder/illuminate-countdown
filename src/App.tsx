import {
  Button,
  useColorMode,
  Flex,
  Heading,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import Countdown from "./Countdown";

function App() {
  const { toggleColorMode } = useColorMode();
  const [digital, { toggle: toggleDigital }] = useBoolean();

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
      <Countdown digital={digital} />
      <Button onClick={toggleColorMode}>Toggle Dark Mode</Button>
      <Button onClick={toggleDigital}>Toggle Digital</Button>
    </Flex>
  );
}

export default App;
