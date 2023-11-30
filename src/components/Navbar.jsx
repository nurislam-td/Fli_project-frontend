import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex alignItems="center" p="20px">
      <Heading as="h1">Dojo cat</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Box bg="gray.200" p="8px">
          M
        </Box>
        <Text>mario@mail.com</Text>
        <Button colorScheme="purple">Log on</Button>
      </HStack>
    </Flex>

    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap={2}>
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue">
    //     2
    //   </Box>
    //   <Box w="150px" h="50px" bg="green" flexGrow="1">
    //     3
    //   </Box>
    //   <Box w="150px" h="50px" bg="yellow">
    //     4
    //   </Box>
    // </Flex>
  );
}
