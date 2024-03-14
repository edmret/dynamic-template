import { GTextComponentType } from "@/types/gComponent.types";
import { Grid, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

const TextComponent: FC<GTextComponentType & { children?: ReactNode }> = (
  componentProps
) => {
  const {
    props: { xs, sm, md, lg, xl, content, ...props },
  } = componentProps;
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Typography {...(props as any)}>{content}</Typography>
    </Grid>
  );
};

export default TextComponent;
