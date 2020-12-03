import { GlobalProps } from "Redux/Map";
import { GetArticlesResponse } from "Responses/ArticleResponses";
import { sendRequest } from "Utils/network";
import Presenter from "Pages/Presenter";
import { ArticleModel } from "Models";
import { useHistory } from 'react-router-dom';

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