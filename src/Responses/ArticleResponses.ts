import { ArticleModel } from "Models";

interface GetArticlesResponse extends Response {
  articles: ArticleModel[];
}

interface GetArticleResponse extends Response {
  article: ArticleModel;
}

export type {
  GetArticlesResponse,
  GetArticleResponse,
}
