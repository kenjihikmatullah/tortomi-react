import { combineReducers } from "redux";
import ARTICLE from './ArticleReducer';
import TREATMENT from './TreatmentReducer';

const reducers = combineReducers({
  ARTICLE,
  TREATMENT
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;