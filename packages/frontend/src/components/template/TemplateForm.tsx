import React from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";

interface FormValues {
  name: string;
  structure: string;
}

interface TemplateFormProps {
  initialValues: FormValues;
  title: string;
}

const TemplateForm: React.FC<TemplateFormProps> = ({
  initialValues,
  title,
}) => {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("required")),
    structure: Yup.string().required(t("required")),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Handle form submission here
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, handleChange, values, errors, touched }) => (
        <Form>
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{ py: 3, px: 2 }}
          >
            <TextField
              name="name"
              type="text"
              label={t("name")}
              variant="outlined"
              fullWidth
              helperText={<ErrorMessage name="name" />}
              error={touched.name && !!errors.name}
              onChange={handleChange}
              value={values.name}
            />
            <TextField
              name="structure"
              label={t("structure")}
              variant="outlined"
              fullWidth
              helperText={<ErrorMessage name="structure" />}
              error={touched.structure && !!errors.structure}
              onChange={handleChange}
              value={values.structure}
              rows={20}
              multiline
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="contained"
              color="primary"
            >
              {t("Save")}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default TemplateForm;
