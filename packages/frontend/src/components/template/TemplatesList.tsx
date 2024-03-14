"use client";
import { useTemplates } from "@/hooks/templateHooks";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

// Inside your component
// const { t } = useTranslation();

// In your JSX
{
  /* <ListItemText primary={t(text)} /> */
}
// You can change the language by calling i18n.changeLanguage('es') for example.

const TemplatesList = () => {
  const { t } = useTranslation();
  const { loading, templates } = useTemplates();

  const handleTemplateClick = (templateId: string) => {
    // Handle list item click event here
    console.log(`Clicked item ${templateId}`);
  };

  const handleAddTemplate = () => {};
  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Typography variant="h6" component="div">
        {t("List of Templates")}
      </Typography>
      <Divider />
      {!loading && !!templates.length && (
        <List
          component="nav"
          sx={{
            bgcolor: "background.default",
            borderRadius: 1,
            borderRight: "1px solid divider",
          }}
        >
          {templates.map((template, index, arr) => (
            <ListItem
              button
              key={template.id}
              onClick={() => handleTemplateClick(template.id)}
              sx={{
                borderBottom:
                  index !== arr.length - 1 ? "1px solid divider" : "none",
              }}
              aria-label={`Template ${template.name}`} // Added aria-label for accessibility
            >
              <ListItemText primary={template.name} />
            </ListItem>
          ))}
        </List>
      )}

      {!loading && !templates.length && (
        <>
          <Typography variant="body1" component="div" sx={{ py: 3 }}>
            {t("There are no templates")}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTemplate} // Ensure functionality can be accessed via keyboard
            aria-label="Add Template" // Added aria-label for accessibility
          >
            {t("Add Template")}
          </Button>
        </>
      )}
    </Paper>
  );
};

export default TemplatesList;
