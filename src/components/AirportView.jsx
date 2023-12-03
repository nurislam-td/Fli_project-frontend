import React, { useEffect, useState } from "react";
import AirportTable from "./AirportTable";
import { Button, VStack, useDisclosure } from "@chakra-ui/react";
import {
  getAirports,
  addAirport,
  patchAirport,
  deleteAirport,
} from "../_services/Airport";
import { AirportModal } from "./AirportModal";

export const AirportView = () => {
  const [airports, setAirports] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUpdateAirport = async () => {
    const result = await getAirports();
    setAirports(result);
    console.log(result);
  };

  const handleSubmit = async (airport) => {
    airport.airport_id === null
      ? await addAirport(airport)
      : await patchAirport(airport.airport_id, airport);
    handleUpdateAirport();
    onClose();
  };

  const handleDeleteRow = async (targetIndex) => {
    await deleteAirport(targetIndex);
    handleUpdateAirport();
  };

  const handleEditRow = (idx) => {
    setEditRow(idx);
    onOpen();
  };

  useEffect(() => {
    handleUpdateAirport();
  }, []);
  return (
    <VStack align="left">
      <Button
        colorScheme="blue"
        maxWidth="150px"
        onClick={() => {
          onOpen();
        }}
      >
        Add Some Aiport
      </Button>
      <AirportTable
        airports={airports}
        handleDeleteRow={handleDeleteRow}
        handleEditRow={handleEditRow}
      />

      <AirportModal
        handleSubmit={handleSubmit}
        defaultValue={editRow !== null && airports[editRow]}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setEditRow(null);
        }}
      />
    </VStack>
  );
};
