import axiosInstance from "@/lib/axiosInstace";
import { Template } from "@/types/template.types";
import { useCallback, useEffect, useState } from "react";

let initalLoaded = false;

// get the list of templates
export const useTemplates = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTemplates = useCallback(() => {
    setLoading(true);
    setError("");
    axiosInstance
      .get("/templates")
      .then(({ data }: any) => {
        setTemplates(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    !initalLoaded && fetchTemplates();
    initalLoaded = true;
  }, [fetchTemplates]);
  return { templates, loading, error, fetchTemplates };
};

export const useCreateTemplate = (fetchTemplates: Function) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const createTemplate = useCallback(
    (template: Template) => {
      setLoading(true);
      setError("");
      axiosInstance
        .post("/templates", template)
        .then(async (response) => {
          await fetchTemplates();
          return response.data;
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [fetchTemplates]
  );
  return { createTemplate, loading, error };
};

export const useUpdateTemplate = (fetchTemplates: Function) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const updateTemplate = (template: Template) => {
    setLoading(true);
    setError("");
    axiosInstance
      .put(`/templates/${template._id}`, template)
      .then(async (response) => {
        await fetchTemplates();
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { updateTemplate, loading, error };
};
