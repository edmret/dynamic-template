import { GComponentType } from "@/types/gComponent.types";
import { v4 as uuidv4 } from "uuid";
import { ComponentRenderer } from "./ComponentRenderer";
import { Form, Formik } from "formik";
import { Container, Typography } from "@mui/material";
import { DisplayOverridesProvider } from "@/contexts/displayOverrides.context";
import { useEffect, useState } from "react";

const convertArrayToArrayComponent = (array: any[]) => {
  return (
    array?.map((row) => {
      return {
        id: uuidv4(),
        type: GComponentType.Row,
        childs: row,
      };
    }) ?? []
  );
};

const initialState = {};
const handleSubmission = (values: any) => {
  console.log(values);
};

interface ViewComponentsProps {
  template: any;
}

const defaultTemplate = {};

const ViewComponents = ({
  template = defaultTemplate,
}: ViewComponentsProps) => {
  const [memoTemplate, setMemoTemplate] = useState<any>({});
  useEffect(() => {
    setMemoTemplate({
      ...(template ?? {}),
      structure: convertArrayToArrayComponent(template?.structure ?? []),
    });
  }, [setMemoTemplate, template]);

  return (
    <DisplayOverridesProvider>
      <Container>
        <Formik initialValues={initialState} onSubmit={handleSubmission}>
          {({ values, handleChange }) => (
            <Form>
              <Typography variant="h4" color="sienna" sx={{ my: 3 }}>
                Preview of the component render
              </Typography>
              {memoTemplate.structure?.map((component: any) => (
                <ComponentRenderer key={component.id} {...(component as any)} />
              ))}
            </Form>
          )}
        </Formik>
      </Container>
    </DisplayOverridesProvider>
  );
};

export default ViewComponents;
