import { DisplayOverridesContext } from "@/contexts/displayOverrides.context";
import { useCallback, useContext } from "react";

export const useDisplayOverrides = () => {
  const { displayOverrides, setDisplayOverrides } = useContext(
    DisplayOverridesContext
  ) as any;

  const updateDisplay = useCallback(
    (id: string, value: boolean) => {
      setDisplayOverrides((prevState: any) => ({
        ...prevState,
        [id]: value,
      }));
    },
    [setDisplayOverrides]
  );

  return { displayOverrides, updateDisplay };
};
