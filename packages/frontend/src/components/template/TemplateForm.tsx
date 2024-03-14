import React from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";

interface FormValues {
  name: string;
  structure: string;
}

interface TemplateFormProps {
  initialValues: FormValues;
  title: string;
  isNew?: boolean;
  onSubmit: (values: FormValues) => void;
}

const TemplateForm: React.FC<TemplateFormProps> = ({
  initialValues,
  title,
  isNew = false,
  onSubmit,
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
      onSubmit={async (values, { setSubmitting }) => {
        const structure = JSON.parse(values.structure);
        await onSubmit({
          ...values,
          structure,
        });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, handleChange, values, errors, touched }) => (
        <Form>
          <Typography
            variant="h5"
            sx={{
              my: 3,
              mx: 2,
            }}
          >
            {title}
          </Typography>
          <Divider />
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
              {isNew ? t("Create template") : t("Save changes")}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default TemplateForm;
