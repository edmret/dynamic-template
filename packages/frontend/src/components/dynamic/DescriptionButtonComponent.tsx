import { GDescriptionButtonComponentType } from "@/types/gComponent.types";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";

const DynamicHeadphonesIcon = dynamic(
  () => import("@mui/icons-material/Headphones"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DynamicMonitorIcon = dynamic(
  () => import("@mui/icons-material/Monitor"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DynamicInfoIcon = dynamic(() => import("@mui/icons-material/Info"), {
  loading: () => <p>Loading...</p>,
});

const availIcons = {
  Headphones: DynamicHeadphonesIcon,
  Monitor: DynamicMonitorIcon,
  Info: DynamicInfoIcon,
};

const DescriptionButtonComponent: FC<
  GDescriptionButtonComponentType & { children?: ReactNode }
> = (componentProps) => {
  const {
    props: { xs, sm, md, lg, xl, content, icon, ...props },
  } = componentProps;

  const availIcons: { [key: string]: React.ComponentType<any> } = {
    Headphones: DynamicHeadphonesIcon,
    Monitor: DynamicMonitorIcon,
    Info: DynamicInfoIcon,
  };

  const IconComponent = icon
    ? availIcons[icon as keyof typeof availIcons]
    : null;

  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Grid container gap={2}>
        {!!IconComponent && (
          <Grid item>
            <IconComponent />
          </Grid>
        )}
        <Grid item flex={1}>
          {content}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default DescriptionButtonComponent;
