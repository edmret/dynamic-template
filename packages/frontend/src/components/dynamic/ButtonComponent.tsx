import { useHandleTriggers } from "@/hooks/triggerHooks";
import { GButtonComponentType } from "@/types/gComponent.types";
import { Button, Grid } from "@mui/material";
import { FC, ReactNode } from "react";

const ButtonComponent: FC<GButtonComponentType & { children?: ReactNode }> = (
  componentProps
) => {
  const {
    props: { xs, sm, md, lg, xl, content, ...props },
    triggers,
  } = componentProps;

  const { onClickHandler } = useHandleTriggers(triggers);

  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} sx={{ px: 1 }}>
      <Button {...(props as any)} fullWidth onClick={onClickHandler}>
        {content}
      </Button>
    </Grid>
  );
};
export default ButtonComponent;
