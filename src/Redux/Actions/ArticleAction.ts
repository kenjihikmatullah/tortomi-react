import { ArticleModel } from "../../Models";
import ActionType from "../ActionType";
import Action from "./Action";

class ArticleAction extends Action {
  articles?: ArticleModel[];

  constructor(params: { type: string, articles?: ArticleModel[] }) {
    const { type, articles } = params;

    super({ type: type });
    this.articles = articles;
  }
}

export default ArticleAction;