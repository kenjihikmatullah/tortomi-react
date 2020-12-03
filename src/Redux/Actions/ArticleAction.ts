import { ArticleModel } from "Models";
import ActionType from "../ActionType";
import Action from "./Action";

interface ArticleAction extends Action {
  articles?: ArticleModel[];
}

function storeArticles(articles: ArticleModel[]): ArticleAction {
  return {
    type: ActionType.STORE_ARTICLES,
    articles: articles
  };
}

export {
  storeArticles
};
export type { ArticleAction };
