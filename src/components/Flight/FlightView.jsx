import { Button, VStack, useDisclosure } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

import {
  getAircrafts,
  deleteAircraft,
  patchAircraft,
  addAircraft,
} from "../../_services/Aircraft";
import FlightTable from "./FlightTable";
import { FlightModal } from "./FlightModal";

export const FlightView = () => {
  const [flights, setFlights] = useState([]);
  const [editRow, setEditRow] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUpdateFlight = async () => {
    const result = await getAircrafts();
    setFlights(result);
    console.log(result);
  };

  const handleSubmit = async (aircraft) => {
    aircraft.aircraft_id === null
      ? await addAircraft(aircraft)
      : await patchAircraft(aircraft.aircraft_id, aircraft);
    handleUpdateFlight();
    onClose();
    setEditRow(null);
  };

  const handleDeleteRow = async (targetIndex) => {
    await deleteAircraft(targetIndex);
    handleUpdateFlight();
  };

  const handleEditRow = (idx) => {
    setEditRow(idx);
    onOpen();
  };

  useEffect(() => {
    handleUpdateFlight();
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
        Add Some Aircraft
      </Button>
      <FlightTable
        flights={flights}
        handleDeleteRow={handleDeleteRow}
        handleEditRow={handleEditRow}
      />

      <FlightModal
        handleSubmit={handleSubmit}
        defaultValue={editRow !== null && flights[editRow]}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setEditRow(null);
        }}
      />
    </VStack>
  );
};
