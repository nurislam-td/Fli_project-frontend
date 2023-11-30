import { Heading, Text, Container, Box, SimpleGrid } from "@chakra-ui/react";
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

    // <Container as="section" maxWidth="12xl">
    //   <Heading my="30px" p="10px">
    //     Chakra UI Components
    //   </Heading>
    //   <Text ml="30px" color="blue.300">
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
    //     assumenda nobis quas quo voluptates expedita, architecto voluptatum
    //     cumque, tempora numquam rem facilis consequuntur nam. Magni adipisci
    //     illum amet molestias repellat.
    //   </Text>
    //   <Box bg="orange.400" my="30px" p="20px">
    //     this is a box
    //   </Box>
    //   <Box sx={boxStyle}>second box</Box>
    // </Container>
  );
}
