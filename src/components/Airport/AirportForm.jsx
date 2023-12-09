import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "../TextField";

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
    <Formik
      initialValues={
        defaultValue || {
          airport_id: null,
          airport_code: "",
          airport_name: "",
          city: "",
          country: "",
          latitude: 0,
          longitude: 0,
        }
      }
      validationSchema={Yup.object({
        airport_code: Yup.string()
          .required("airport code required")
          .max(3, "Airport code too long"),
        latitude: Yup.number(),
        longitude: Yup.number(),
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        values = {
          ...values,
          latitude: parseFloat(values.latitude),
          longitude: parseFloat(values.longitude),
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
            label={"Airport Code"}
            name="airport_code"
            placeholder="KZT"
            type="airport_code"
          />
          <TextField
            label={"Airport Name"}
            name="airport_name"
            placeholder="enter name"
            type="airport_name"
          />
          <TextField
            label={"City"}
            name="city"
            placeholder="enter city"
            type="city"
          />

          <TextField
            label={"Country"}
            name="country"
            placeholder="enter country"
            type="country"
          />

          <TextField
            label={"Latitude"}
            name="latitude"
            placeholder="59.9564"
            type="latitude"
          />

          <TextField
            label={"Longitude"}
            name="longitude"
            placeholder="64.1557"
            type="longitude"
          />

          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export { AirportForm };
