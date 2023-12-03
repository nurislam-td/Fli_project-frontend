import { Box, SimpleGrid } from "@chakra-ui/react";
export default function Dashboard() {
  const boxStyle = {
    p: "10px",
    m: "20px",
    textAlign: "center",
    bg: "purple.400",
    ":hover": {
      bg: "blue.500",
    },
  };
  return (
    <SimpleGrid columns={4} p="5px" minChildWidth="250px" spacing="10px">
      <Box border="1px solid" bg="white" h="200px"></Box>
      <Box border="1px solid" bg="white" h="200px"></Box>
      <Box border="1px solid" bg="white" h="200px"></Box>
      <Box border="1px solid" bg="white" h="200px"></Box>

      <Box border="1px solid" bg="white" h="200px"></Box>
      <Box border="1px solid" bg="white" h="200px"></Box>
      <Box border="1px solid" bg="white" h="200px"></Box>
      <Box border="1px solid" bg="white" h="200px"></Box>

      <Box border="1px solid" bg="white" h="200px"></Box>
      <Box border="1px solid" bg="white" h="200px"></Box>
      <Box border="1px solid" bg="white" h="200px"></Box>
      <Box border="1px solid" bg="white" h="200px"></Box>
    </SimpleGrid>
  );
}
