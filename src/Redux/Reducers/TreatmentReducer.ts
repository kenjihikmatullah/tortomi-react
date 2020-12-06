import { TreatmentModel } from "Models";
import { TreatmentAction } from "Redux/Actions/TreatmentAction";
import ActionType from "Redux/ActionType";

interface State {
  treatments: TreatmentModel[];
}

const initialState: State = {
  treatments: []
};

export default function (state: State = initialState, action: TreatmentAction): State {
  switch (action.type) {
    case ActionType.STORE_TREATMENTS:
      return {
        ...state,
        treatments: action.treatments ?? []
      };

    default:
      return state;
  }
}