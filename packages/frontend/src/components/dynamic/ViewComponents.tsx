import { GComponentType } from "@/types/gComponent.types";
import { v4 as uuidv4 } from "uuid";
import { ComponentRenderer } from "./ComponentRenderer";
import { Form, Formik } from "formik";
import { Typography } from "@mui/material";

const testJson = [
  [
    {
      id: "1",
      type: "Text",
      props: {
        content: "Disposition: Garbage_or_Empty_Box",
        variant: "h5",
      },
    },
  ],
  [
    {
      id: "2",
      type: "DescriptionButton",
      props: {
        content: "check if user has existing complaint",
        icon: "Monitor",
        xs: 12,
        lg: 6,
      },
    },
    {
      id: "3",
      type: "DescriptionButton",
      props: {
        content:
          "Check What product the user received in place of the product they ordered",
        icon: "Headphones",
        xs: 12,
        lg: 6,
      },
    },
  ],
  [
    {
      id: "4",
      type: "Button",
      props: {
        content: "Compliant Already Released",
        variant: "contained",
        xs: 6,
      },
    },
    {
      id: "5",
      type: "Button",
      props: {
        content: "Compliant Does not Exist",
        variant: "contained",
        xs: 6,
      },
    },
  ],
  [
    {
      id: "6",
      type: "DescriptionButton",
      props: {
        content: "Compliant Does Not Exists",
        icon: "Info",
        xs: 12,
        lg: 6,
      },
    },
  ],
  [
    {
      id: "7",
      type: "Button",
      props: {
        content: "Check User Cohort",
        variant: "contained",
        xs: 6,
        sm: 4,
        lg: 3,
      },
    },
  ],
];

const convertArrayToArrayComponent = (array: any[]) => {
  return array.map((row) => {
    return {
      id: uuidv4(),
      type: GComponentType.Row,
      childs: row,
    };
  });
};

const rowComponents = convertArrayToArrayComponent(testJson);

const initialState = {};
const handleSubmission = (values: any) => {
  console.log(values);
};

const defaultProps = {};

const ViewComponents = () => {
  return (
    <Formik initialValues={initialState} onSubmit={handleSubmission}>
      {({ values, handleChange }) => (
        <Form>
          <Typography variant="h4" color="sienna" sx={{ my: 3 }}>
            Preview of the component render
          </Typography>
          {rowComponents.map((component) => (
            <ComponentRenderer key={component.id} {...(component as any)} />
          ))}
        </Form>
      )}
    </Formik>
  );
};

export default ViewComponents;
