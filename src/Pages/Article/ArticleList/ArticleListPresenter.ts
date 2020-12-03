import { ArticleModel } from "../../../Models";
import { GlobalProps } from "../../../Redux/Map";
import GetArticlesResponse from "../../../Responses/GetArticlesResponse";
import { sendRequest } from "../../../Utils/network";
import Presenter from "../../Presenter";

class ArticleListPresenter extends Presenter {
  constructor(props: GlobalProps) {
    super(props);
  }

  getArticles = async () => {
    const { storeArticles } = this.props;

    sendRequest<any, GetArticlesResponse>({
      method: 'GET',
      endpoint: 'articles',
      onSucceed: response => {
        const articles = response.articles.map(a => {
          return new ArticleModel({
            id: a.id,
            title: a.title,
            image: a.image,
            views: a.views
          });
        });

        storeArticles(articles);
      },
      onFailed: response => {
        // TODO
      }
    });
  }
}

export default ArticleListPresenter;