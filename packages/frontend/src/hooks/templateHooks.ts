import axiosInstance from "@/lib/axiosInstace";
import { Template } from "@/types/template.types";
import { useEffect, useState } from "react";

// get the list of templates
export const useTemplates = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    setError("");
    axiosInstance
      .get("/templates")
      .then((data: any) => {
        setTemplates(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { templates, loading, error };
};
