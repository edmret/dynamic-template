import { AnyGComponentType, GComponentType } from "@/types/gComponent.types";
import { ReactNode } from "react";
import RowComponent from "./RowComponent";
import ColumnComponent from "./ColumnComponent";
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";
import DescriptionButtonComponent from "./DescriptionButtonComponent";

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
  return (
    <Component {...(props as any)}>
      {props.childs?.map((child) => (
        <ComponentRenderer key={child.id} {...(child as any)} />
      ))}
    </Component>
  );
};
