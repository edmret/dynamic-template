import { useState } from "react";
import TemplateForm from "./TemplateForm";
import { useUpdateTemplate } from "@/hooks/templateHooks";

interface EditTemplateFormProps {
  data: any;
  onSuccessfulSubmit: (template: any) => void;
  fetchTemplates: () => void;
}

const EditTemplateForm = ({
  data,
  onSuccessfulSubmit,
  fetchTemplates,
}: EditTemplateFormProps) => {
  const [memorizedData] = useState({
    ...data,
    structure: JSON.stringify(data.structure, null, 2),
  });

  const { updateTemplate } = useUpdateTemplate(fetchTemplates);

  const onSubmit = async (values: any) => {
    await updateTemplate(values);
    onSuccessfulSubmit(values);
  };

  return (
    <TemplateForm
      title="Edit Template"
      initialValues={memorizedData}
      onSubmit={onSubmit}
    />
  );
};

export default EditTemplateForm;
