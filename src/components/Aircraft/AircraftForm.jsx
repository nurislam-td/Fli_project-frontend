import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AircraftForm = ({ handleSubmit, defaultValue }) => {
  console.log("forma ", defaultValue);
  const formik = useFormik({
    initialValues: defaultValue || {
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
    },
    validationSchema: Yup.object({
      registration_number: Yup.string()
        .required("Registration number required")
        .max(20, "Registration number too long"),
      year_of_manufacturer: Yup.number(),
      capacity: Yup.number(),
      fuel_capacity: Yup.number(),
      cnt_of_seats: Yup.number(),
    }),
    onSubmit: (values) => {
      console.log(values);
      values = {
        ...values,
        year_of_manufacturer: parseFloat(values.year_of_manufacturer),
        capacity: parseFloat(values.capacity),
        fuel_capacity: parseFloat(values.fuel_capacity),
        cnt_of_seats: parseFloat(values.cnt_of_seats),
      };
      handleSubmit(values);
      console.log(values);
    },
  });

  return (
    <Box p={4} display="flex" justifyContent="left" gap="50px">
      <form onSubmit={formik.handleSubmit}>
        <FormControl mb={4} isInvalid={formik.errors.manufacturer}>
          <FormLabel>manufacturer</FormLabel>
          <Input
            type="text"
            placeholder="manufacturer"
            name="manufacturer"
            value={formik.values.manufacturer}
            onChange={formik.handleChange}
          />
          <FormErrorMessage>{formik.errors.manufacturer}</FormErrorMessage>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>model</FormLabel>
          <Input
            type="text"
            placeholder="enter model..."
            name="model"
            value={formik.values.model}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            placeholder="Astana"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Country</FormLabel>
          <Input
            type="text"
            placeholder="Kazakhstan"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl mb={4} isInvalid={formik.errors.latitude}>
          <FormLabel>Latitude</FormLabel>
          <Input
            type="text"
            placeholder="59.9564"
            name="latitude"
            value={formik.values.latitude}
            onChange={formik.handleChange}
          />
          <FormErrorMessage>{formik.errors.latitude}</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formik.errors.longitude}>
          <FormLabel>Longitude</FormLabel>
          <Input
            type="text"
            placeholder="64.1557"
            name="longitude"
            value={formik.values.longitude}
            onChange={formik.handleChange}
          />
          <FormErrorMessage>{formik.errors.longitude}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export { AircraftForm };
