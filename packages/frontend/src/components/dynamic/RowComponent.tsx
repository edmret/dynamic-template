import { GRowComponentType } from "@/types/gComponent.types";
import { Grid } from "@mui/material";
import { FC, ReactNode } from "react";

const RowComponent: FC<GRowComponentType & { children?: ReactNode }> = (
  props
) => {
  return (
    <Grid container {...props.props} sx={{ my: 1 }}>
      {props.children}
    </Grid>
  );
};

export default RowComponent;
