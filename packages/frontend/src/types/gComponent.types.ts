import { strEnum } from "@/utils/enumUtils";
import { GTrigger } from "./gTrigger.types";
import { AvailMaterialIcons } from "./icons.types";

export const GComponentType = strEnum([
  "Row",
  "Column",
  "Text",
  "Button",
  "DescriptionButton",
]);

export type GComponentType = keyof typeof GComponentType;

export type GRowComponentType = GComponentBase<"Row">;
export type GColumnComponentType = GComponentBase<"Column">;
export type GTextComponentType = GComponentBase<"Text">;
export type GButtonComponentType = GComponentBase<"Button">;
export type GDescriptionButtonComponentType =
  GComponentBase<"DescriptionButton">;

export type AnyGComponentType =
  | GRowComponentType
  | GColumnComponentType
  | GTextComponentType
  | GButtonComponentType
  | GDescriptionButtonComponentType;

// create type that is a map which maps each GComponentType to its props bt force the keys to be of type GComponentType
export type GComponentPropSMap = {
  [GComponentType.Row]: GRowComponentProps;
  [GComponentType.Column]: GColumnComponentProps;
  [GComponentType.Text]: GTextComponentProps;
  [GComponentType.Button]: GButtonComponentProps;
  [GComponentType.DescriptionButton]: GDescriptionButtonComponentProps;
};

export interface GComponentBase<T extends keyof GComponentPropSMap> {
  id: string;
  display?: string;
  type: T;
  props: GComponentPropSMap[T];
  triggers?: GTrigger[];
  childs?: GComponentBase<GComponentType>[];
}

export interface GRowComponentProps {
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
}

export interface GColumnComponentProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface GTextComponentProps extends GColumnComponentProps {
  color?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline"
    | "srOnly"
    | "inherit"
    | undefined;
  content: string;
}

export interface GButtonComponentProps extends GColumnComponentProps {
  color?: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  content: string;
}

export type GDescriptionButtonComponentProps = GTextComponentProps &
  GButtonComponentProps & {
    icon?: AvailMaterialIcons;
  };
