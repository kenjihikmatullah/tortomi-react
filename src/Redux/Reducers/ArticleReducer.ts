import { ArticleModel } from "../../Models";
import { ArticleAction } from "../Actions/ArticleAction";
import ActionType from "../ActionType";

interface State {
  articles: ArticleModel[];
  recommendedArticles: ArticleModel[];
  selectedArticle?: ArticleModel;
}

const initialState: State = {
  articles: [],
  recommendedArticles: []
};

export default function (state: State = initialState, action: ArticleAction): State {
  switch (action.type) {
    case ActionType.STORE_ARTICLES:
      return {
        ...state,
        articles: action.articles ?? [],
      };

    case ActionType.SELECT_ARTICLE:
      return {
        ...state,
        selectedArticle: action.article
      };

    default:
      return state;
  }
}