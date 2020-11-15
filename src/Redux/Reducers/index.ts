import { combineReducers } from "redux";
import ARTICLE from './ArticleReducer';

const reducers = combineReducers({
  ARTICLE,
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;