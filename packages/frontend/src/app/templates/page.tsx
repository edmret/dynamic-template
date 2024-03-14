"use client";
import TemplateForm from "@/components/template/TemplateForm";
import TemplatesList from "@/components/template/TemplatesList";
import withAuth from "@/lib/withAuth";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const TemplatePage = () => {
  const { t } = useTranslation();

  const handleListItemClick = (event: any, index: number) => {
    // Handle list item click event here
    console.log(`Clicked item ${index}`);
  };
  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <TemplatesList />
      </Grid>
      <Grid item xs={12} md={6} lg={8} xl={9}>
        <TemplateForm
          title={t("Create Template")}
          initialValues={{
            name: "",
            structure: "",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default withAuth(TemplatePage);
