import { GColumnComponentType } from "@/types/gComponent.types";
import { Grid } from "@mui/material";
import { FC, ReactNode } from "react";

const ColumnComponent: FC<GColumnComponentType & { children?: ReactNode }> = (
  props
) => {
  return (
    <Grid item {...props.props}>
      {props.children}
    </Grid>
  );
};

export default ColumnComponent;
