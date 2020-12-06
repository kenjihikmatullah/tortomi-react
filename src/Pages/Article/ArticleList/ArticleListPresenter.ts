import Presenter from "Pages/Presenter";
import { GetArticlesResponse } from "Responses/ArticleResponses";
import { sendRequest } from "Utils/network";

class ArticleListPresenter extends Presenter {

  getArticles = async () => {
    const { storeArticles } = this.props;

    sendRequest<any, GetArticlesResponse>({
      method: 'GET',
      endpoint: 'articles',
      onSucceed: response => {
        storeArticles(response.articles);
      }
    });
  }

  read = async (id?: number) => {
    sendRequest<any, any>({
      method: 'POST',
      endpoint: `articles/${id}/read`,
    });
  }
}

export default ArticleListPresenter;