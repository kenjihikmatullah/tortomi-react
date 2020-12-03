import { ArticleModel } from "Models";
import ActionType from "../ActionType";
import Action from "./Action";

interface ArticleAction extends Action {
  articles?: ArticleModel[];
  article?: ArticleModel;
}

function storeArticles(articles: ArticleModel[]): ArticleAction {
  return {
    type: ActionType.STORE_ARTICLES,
    articles: articles
  };
}

function selectArticle(article: ArticleModel): ArticleAction {
  return {
    type: ActionType.SELECT_ARTICLE,
    article: article
  };
}

export {
  storeArticles,
  selectArticle
};
export type { ArticleAction };
