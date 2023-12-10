import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "../TextField";

const AircraftForm = ({ handleSubmit, defaultValue }) => {
  console.log("forma ", defaultValue);

  return (
    <Formik
      initialValues={
        defaultValue || {
          aircraft_id: null,
          manufacturer: "",
          model: "",
          registration_number: "",
          year_of_manufacturer: null,
          capacity: null,
          cnt_of_seats: null,
          type: "",
          fuel_capacity: null,
          engine_type: "",
          current_location: null,
        }
      }
      validationSchema={Yup.object({
        registration_number: Yup.string()
          .required("registration number code required")
          .max(20, "registration number code too long"),
        year_of_manufacturer: Yup.number(),
        capacity: Yup.number(),
        cnt_of_seats: Yup.number(),
        fuel_capacity: Yup.number(),
        current_location: Yup.number(),
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        values = {
          ...values,
          year_of_manufacturer: parseFloat(values.year_of_manufacturer),
          capacity: parseFloat(values.capacity),
          cnt_of_seats: parseFloat(values.cnt_of_seats),
          fuel_capacity: parseFloat(values.fuel_capacity),
          current_location: parseFloat(values.current_location),
        };
        handleSubmit(values);
        console.log(values);
        actions.resetForm;
      }}
    >
      {(formik) => (
        <VStack
          as="form"
          justifyContent="center"
          spacing="10px"
          onSubmit={formik.handleSubmit}
        >
          <TextField
            label={"Manufacturer"}
            name="manufacturer"
            placeholder="enter manufacturer ..."
            type="manufacturer"
          />
          <TextField
            label={"Model"}
            name="model"
            placeholder="enter model ..."
            type="model"
          />
          <TextField
            label={"Registration number"}
            name="registration_number"
            placeholder="enter registration number"
            type="registration_number"
          />

          <TextField
            label={"Year of manufacturer"}
            name="year_of_manufacturer"
            placeholder="enter year"
            type="year_of_manufacturer"
          />

          <TextField
            label={"Capacity"}
            name="capacity"
            placeholder="enter number"
            type="capacity"
          />

          <TextField
            label={"Count of seats"}
            name="cnt_of_seats"
            placeholder="enter count"
            type="cnt_of_seats"
          />

          <TextField
            label={"Type"}
            name="type"
            placeholder="enter type"
            type="type"
          />

          <TextField
            label={"Fuel capacity"}
            name="fuel_capacity"
            placeholder="enter fuel capacity"
            type="fuel_capacity"
          />

          <TextField
            label={"Engine type"}
            name="engine_type"
            placeholder="enter engine type"
            type="engine_type"
          />
          <TextField
            label={"Current location"}
            name="current_location"
            placeholder="enter current location"
            type="current_location"
          />

          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export { AircraftForm };
