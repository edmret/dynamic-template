"use client";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface TemplatesListProps {
  handleTemplateClick: (template: any) => void;
  handleAddTemplate: () => void;
  selectedTemplateId?: string;
  templates?: any[];
  loading?: boolean;
}

const TemplatesList = ({
  handleTemplateClick,
  handleAddTemplate,
  selectedTemplateId,
  templates = [],
  loading,
}: TemplatesListProps) => {
  const { t } = useTranslation();

  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Grid container justifyContent="space-between">
        <Typography variant="h6" component="div">
          {t("List of Templates")}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTemplate}
          aria-label="Add Template"
        >
          +
        </Button>
      </Grid>
      <Divider sx={{ my: 2 }} />
      {!loading && !!templates.length && (
        <List
          component="nav"
          sx={{
            bgcolor: "background.default",
            borderRadius: 1,
            borderRight: "1px solid divider",
          }}
        >
          {templates?.map((template, index, arr) => (
            <ListItem
              button
              key={template._id}
              onClick={() => handleTemplateClick(template)}
              sx={{
                bgcolor:
                  template._id === selectedTemplateId
                    ? "secondary.light"
                    : "primary.light",
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
