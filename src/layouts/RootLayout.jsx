import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
      <GridItem
        as="aside"
        p="5px"
        colSpan={{ base: 6, md: 2, xl: 1 }}
        bg="blue.500"
        minHeight={{ lg: "100vh" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem colSpan={{ base: 6, md: 4, xl: 5 }} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
