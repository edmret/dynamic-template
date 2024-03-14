import { strEnum } from "@/utils/enumUtils";
import { GActionType } from "./gAction.types";

export const GTriggerType = strEnum(["Click", "Change"]);

export type GTriggerType = keyof typeof GTriggerType;

export interface GTrigger {
  type: GTriggerType;
  targets: [string];
  action: GActionType;
}
