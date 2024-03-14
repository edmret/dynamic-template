"use client";
import ViewComponents from "@/components/dynamic/ViewComponents";
import EditTemplateForm from "@/components/template/EditTemplateForm";
import NewTemplateForm from "@/components/template/NewTemplateForm";
import TemplatesList from "@/components/template/TemplatesList";
import { useTemplates } from "@/hooks/templateHooks";
import withAuth from "@/lib/withAuth";
import { Template } from "@/types/template.types";
import { Box, Divider, Grid } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

const TemplatePage: FC<any> = () => {
  const { t } = useTranslation();
  const [currentTemplate, setCurrentTemplate] = useState<any>(null);
  const { loading, templates, fetchTemplates } = useTemplates();

  const handleTemplateClick = (template: Template) => {
    setCurrentTemplate(template);
  };

  const handleAddTemplate = () => {
    setCurrentTemplate(null);
  };

  const onSuccessfulSubmit = (template: Template) => {
    setCurrentTemplate(template);
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <TemplatesList
            handleTemplateClick={handleTemplateClick}
            handleAddTemplate={handleAddTemplate}
            selectedTemplateId={currentTemplate?._id}
            templates={templates}
            loading={loading}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={8} xl={9}>
          {currentTemplate ? (
            <EditTemplateForm
              data={currentTemplate}
              key={currentTemplate._id}
              onSuccessfulSubmit={onSuccessfulSubmit}
              fetchTemplates={fetchTemplates}
            />
          ) : (
            <NewTemplateForm
              onSuccessfulSubmit={onSuccessfulSubmit}
              fetchTemplates={fetchTemplates}
            />
          )}
        </Grid>
      </Grid>
      <Divider />
      <ViewComponents template={currentTemplate} />
    </Box>
  );
};

export default withAuth(TemplatePage);
