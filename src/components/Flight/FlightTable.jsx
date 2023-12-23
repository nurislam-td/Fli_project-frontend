import React from "react";
import {
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const FlightTable = ({ flights, handleEditRow, handleDeleteRow }) => {
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
              <Th>manufacturer</Th>
              <Th>model</Th>
              <Th>registration_number</Th>
              <Th>year of manufacturer</Th>
              <Th>capacity</Th>
              <Th>cnt of seats</Th>
              <Th>type</Th>
              <Th>fuel capacity</Th>
              <Th>engine type</Th>
              <Th>current location</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {flights?.map((aircraft, idx) => (
              <Tr key={aircraft.aircraft_id}>
                <Td>{aircraft.aircraft_id}</Td>
                <Td>{aircraft.manufacturer}</Td>
                <Td>{aircraft.model}</Td>
                <Td>{aircraft.registration_number}</Td>
                <Td>{aircraft.year_of_manufacturer}</Td>
                <Td>{aircraft.capacity}</Td>
                <Td>{aircraft.cnt_of_seats}</Td>
                <Td>{aircraft.type}</Td>
                <Td>{aircraft.fuel_capacity}</Td>
                <Td>{aircraft.engine_type}</Td>
                <Td>{aircraft.current_location}</Td>
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
                        handleDeleteRow(aircraft.aircraft_id);
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

export default FlightTable;
