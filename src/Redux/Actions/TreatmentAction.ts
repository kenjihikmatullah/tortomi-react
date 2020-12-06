import { TreatmentModel } from "Models";
import ActionType from "Redux/ActionType";
import Action from "./Action";

interface TreatmentAction extends Action {
  treatments?: TreatmentModel[];
}

function storeTreatments(treatments: TreatmentModel[]): TreatmentAction {
  return {
    type: ActionType.STORE_TREATMENTS,
    treatments: treatments
  };
}

export {
  storeTreatments
}

export type {
  TreatmentAction
};