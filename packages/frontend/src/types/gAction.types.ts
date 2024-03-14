import { strEnum } from "@/utils/enumUtils";

export const GActionType = strEnum(["Toggle", "Show", "Hide"]);

export type GActionType = keyof typeof GActionType;
