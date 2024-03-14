import { DisplayOverridesContext } from "@/contexts/displayOverrides.context";
import { GActionType } from "@/types/gAction.types";
import { GTrigger, GTriggerType } from "@/types/gTrigger.types";
import { useCallback, useContext, useMemo } from "react";

export const useHandleAction = () => {
  const { setDisplayOverrides } = useContext(DisplayOverridesContext) as any;

  const handleTargets = useCallback(
    (action: GActionType, targets: string[]) => () => {
      if ([GActionType.Hide, GActionType.Show].includes(action as any)) {
        const newBooleanValues = stringArrayToRecordBoolean(
          targets,
          action === GActionType.Show
        );

        setDisplayOverrides((prev: any) => ({
          ...prev,
          ...newBooleanValues,
        }));
      }

      if (GActionType.Toggle === action) {
        setDisplayOverrides((prev: any) => {
          const toggledTargets = targets.reduce<Record<string, boolean>>(
            (acc, target) => ({
              ...acc,
              [target]: !(prev[target] ?? true),
            }),
            {}
          );

          return {
            ...prev,
            ...toggledTargets,
          };
        });
      }
    },
    [setDisplayOverrides]
  );
  return handleTargets;
};

const defaultTriggers: GTrigger[] = [];

export const useHandleTriggers = (triggers: GTrigger[] = defaultTriggers) => {
  const handleActions = useHandleAction();

  const clickTriggers = useMemo(
    () =>
      triggers
        .filter((trigger) => trigger.type === GTriggerType.Click)
        .map((trigger) => handleActions(trigger.action, trigger.targets)),
    [handleActions, triggers]
  );
  const changeTriggers = useMemo(
    () =>
      triggers
        .filter((trigger) => trigger.type === GTriggerType.Change)
        .map((trigger) => handleActions(trigger.action, trigger.targets)),
    [handleActions, triggers]
  );

  const onChangeHandler = useCallback(() => {
    for (const changeHandler of changeTriggers) {
      changeHandler();
    }
  }, [changeTriggers]);

  const onClickHandler = useCallback(() => {
    for (const clickHandler of clickTriggers) {
      clickHandler();
    }
  }, [clickTriggers]);

  return { onChangeHandler, onClickHandler };
};

function stringArrayToRecordBoolean(stringArray: string[], value: boolean) {
  return stringArray.reduce<Record<string, boolean>>(
    (pre, val) => ({
      ...pre,
      [val]: value,
    }),
    {}
  );
}
