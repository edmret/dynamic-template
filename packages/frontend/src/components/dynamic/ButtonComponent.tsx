import { GButtonComponentType } from "@/types/gComponent.types";
import { Button, Grid } from "@mui/material";
import { FC, ReactNode } from "react";

const ButtonComponent: FC<GButtonComponentType & { children?: ReactNode }> = (
  componentProps
) => {
  const {
    props: { xs, sm, md, lg, xl, content, ...props },
  } = componentProps;

  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} sx={{ px: 1 }}>
      <Button {...(props as any)} fullWidth>
        {content}
      </Button>
    </Grid>
  );
};
export default ButtonComponent;
