import { Button, VStack, useDisclosure } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

import {
  getAircrafts,
  deleteAircraft,
  patchAircraft,
  addAircraft,
} from "../../_services/Aircraft";

export const AircraftView = () => {
  const [aircrafts, setAircrafts] = useState([]);
  const [editRow, setEditRow] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUpdateAircraft = async () => {
    const result = await getAircrafts();
    setAircrafts(result);
    console.log(result);
  };

  const handleSubmit = async (airport) => {
    airport.airport_id === null
      ? await addAircraft(airport)
      : await patchAircraft(airport.airport_id, airport);
    handleUpdateAircraft();
    onClose();
    setEditRow(null);
  };

  const handleDeleteRow = async (targetIndex) => {
    await deleteAircraft(targetIndex);
    handleUpdateAircraft();
  };

  const handleEditRow = (idx) => {
    setEditRow(idx);
    onOpen();
  };

  useEffect(() => {
    handleUpdateAircraft();
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
      <AircraftTable
        aircrafts={aircrafts}
        handleDeleteRow={handleDeleteRow}
        handleEditRow={handleEditRow}
      />

      <AircraftModal
        handleSubmit={handleSubmit}
        defaultValue={editRow !== null && aircrafts[editRow]}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setEditRow(null);
        }}
      />
    </VStack>
  );
};
