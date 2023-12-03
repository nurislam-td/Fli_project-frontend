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

const AirportForm = ({ handleSubmit, defaultValue }) => {
  console.log("forma ", defaultValue);
  const formik = useFormik({
    initialValues: defaultValue || {
      airport_id: null,
      airport_code: "",
      airport_name: "",
      city: "",
      country: "",
      latitude: 0,
      longitude: 0,
    },
    validationSchema: Yup.object({
      airport_code: Yup.string()
        .required("airport code required")
        .max(3, "Airport code too long"),
      latitude: Yup.number(),
      longitude: Yup.number(),
    }),
    onSubmit: (values) => {
      console.log(values);
      values = {
        ...values,
        latitude: parseFloat(values.latitude),
        longitude: parseFloat(values.longitude),
      };
      handleSubmit(values);
      console.log(values);
    },
  });

  return (
    <Box p={4} display="flex" justifyContent="left" gap="50px">
      <form onSubmit={formik.handleSubmit}>
        <FormControl mb={4} isInvalid={formik.errors.airport_code}>
          <FormLabel>Airport Code</FormLabel>
          <Input
            type="text"
            placeholder="AXC"
            name="airport_code"
            value={formik.values.airport_code}
            onChange={formik.handleChange}
          />
          <FormErrorMessage>{formik.errors.airport_code}</FormErrorMessage>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Airport Name</FormLabel>
          <Input
            type="text"
            placeholder="enter name..."
            name="airport_name"
            value={formik.values.airport_name}
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

export { AirportForm };
