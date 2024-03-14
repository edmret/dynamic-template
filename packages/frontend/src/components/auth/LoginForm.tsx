"use client";
import React from "react";
import { Formik, Form } from "formik";
import {
  Box,
  Button,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { signIn } from "next-auth/react";

import * as Yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const schema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  const handleLogin = async (
    { username, password }: any,
    { setSubmitting }: any
  ) => {
    try {
      setSubmitting(true);
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      setSubmitting(false);

      const token = response.data.access_token;

      // Sign in with the token
      signIn("credentials", { callbackUrl: "/", token });
    } catch (error) {
      console.error("Login failed");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleLogin}
    >
      {({
        submitForm,
        isSubmitting,
        touched,
        errors,
        handleChange,
        values,
      }) => (
        <Form>
          <Typography variant="h4" sx={{ marginY: 3 }}>
            Login
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              onChange={handleChange}
              name="username"
              type="text"
              label="Username"
              fullWidth
              helperText={touched.username ? errors.username : ""}
              error={touched.username && Boolean(errors.username)}
              value={values.username}
            />
            <TextField
              onChange={handleChange}
              name="password"
              type="password"
              label="Password"
              fullWidth
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
            />
            {isSubmitting && <LinearProgress />}
            <Button
              sx={{ marginTop: 2 }}
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Login
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
