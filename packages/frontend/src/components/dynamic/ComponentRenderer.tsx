import { AnyGComponentType, GComponentType } from "@/types/gComponent.types";
import { ReactNode } from "react";
import RowComponent from "./RowComponent";
import ColumnComponent from "./ColumnComponent";
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";
import DescriptionButtonComponent from "./DescriptionButtonComponent";
import { useDisplayOverrides } from "@/hooks/displayOverridesHooks";

type ComponentWthChildrenType = AnyGComponentType & { children?: ReactNode };

type ComponentMapType = {
  [GComponentType.Row]: typeof RowComponent;
  [GComponentType.Column]: typeof ColumnComponent;
  [GComponentType.Text]: typeof TextComponent;
  [GComponentType.Button]: typeof ButtonComponent;
  [GComponentType.DescriptionButton]: typeof DescriptionButtonComponent;
};

const componentMap: ComponentMapType = {
  [GComponentType.Row]: RowComponent,
  [GComponentType.Column]: ColumnComponent,
  [GComponentType.Text]: TextComponent,
  [GComponentType.Button]: ButtonComponent,
  [GComponentType.DescriptionButton]: DescriptionButtonComponent,
};

export const ComponentRenderer = (props: ComponentWthChildrenType) => {
  const Component = componentMap[props.type as keyof ComponentMapType];
  const { displayOverrides } = useDisplayOverrides();

  // display by default
  const display = displayOverrides[props.id] ?? props.display ?? true;
  return display ? (
    <Component {...(props as any)}>
      {props.childs?.map((child) => (
        <ComponentRenderer key={child.id} {...(child as any)} />
      ))}
    </Component>
  ) : null;
};
