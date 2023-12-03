import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex alignItems="center" p="20px" paddingLeft="0px">
      <Heading as="h1">Fli Airlines</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Box bg="gray.200" p="8px">
          M
        </Box>
        <Text>mario@mail.com</Text>
        <Button colorScheme="blue">Log on</Button>
      </HStack>
    </Flex>
  );
}
