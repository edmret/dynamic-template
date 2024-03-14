import React, { ReactNode } from "react";

interface DisplayOverridesContextType {
  displayOverrides: { [id: string]: boolean };
  setDisplayOverrides: React.Dispatch<
    React.SetStateAction<{ [id: string]: boolean }>
  >;
}

export const DisplayOverridesContext = React.createContext<
  DisplayOverridesContextType | undefined
>(undefined);

export const DisplayOverridesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [displayOverrides, setDisplayOverrides] = React.useState<{
    [id: string]: boolean;
  }>({});

  return (
    <DisplayOverridesContext.Provider
      value={{ displayOverrides, setDisplayOverrides }}
    >
      {children}
    </DisplayOverridesContext.Provider>
  );
};
