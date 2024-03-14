"use client";
import { Box } from "@mui/material";
import AppHeader from "./AppHeader";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "@/i18/translations";
import { getQueryStringValue } from "@/utils/query.utils";

// function to get the query string value from the url

// //e.g. ?lng=en
// const search = document?.location?.search ?? "";
// // extract de lang from query string
// const lang = getQueryStringValue("lng", search);
i18n.use(initReactI18next).init({
  resources: translations,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <AppHeader />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
