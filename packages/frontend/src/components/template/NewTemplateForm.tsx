import { useCreateTemplate } from "@/hooks/templateHooks";
import TemplateForm from "./TemplateForm";

const initialValues = {
  name: "",
  structure: "",
};

interface NewTemplateFormProps {
  onSuccessfulSubmit: (template: any) => void;
  fetchTemplates: () => void;
}

const NewTemplateForm = ({
  onSuccessfulSubmit,
  fetchTemplates,
}: NewTemplateFormProps) => {
  const { createTemplate } = useCreateTemplate(fetchTemplates);

  const onSubmit = async (values: any) => {
    const data = await createTemplate(values);
    onSuccessfulSubmit(data);
  };

  return (
    <TemplateForm
      title="Create Template"
      initialValues={initialValues}
      isNew
      onSubmit={onSubmit}
    />
  );
};

export default NewTemplateForm;
