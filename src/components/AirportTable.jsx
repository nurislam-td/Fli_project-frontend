import React, { useEffect, useState } from "react";
import {
  HStack,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const AirportTable = ({ airports, handleEditRow, handleDeleteRow }) => {
  return (
    <div>
      <TableContainer>
        <Table
          variant="striped"
          colorScheme="teal"
          bg="gray.300"
          borderRadius="10px"
        >
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Code</Th>
              <Th>Name</Th>
              <Th>City</Th>
              <Th>Country</Th>
              <Th>Latitude</Th>
              <Th>Longitude</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {airports?.map((airport, idx) => (
              <Tr key={airport.airport_id}>
                <Td>{airport.airport_id}</Td>
                <Td>{airport.airport_code}</Td>
                <Td>{airport.airport_name}</Td>
                <Td>{airport.city}</Td>
                <Td>{airport.country}</Td>
                <Td>{airport.latitude}</Td>
                <Td>{airport.longitude}</Td>
                <Td>
                  <HStack spacing="8px" p="8px">
                    <EditIcon
                      _hover={{ cursor: "pointer" }}
                      onClick={() => {
                        handleEditRow(idx);
                      }}
                    />
                    <DeleteIcon
                      _hover={{ cursor: "pointer" }}
                      onClick={() => {
                        handleDeleteRow(airport.airport_id);
                      }}
                    />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AirportTable;
