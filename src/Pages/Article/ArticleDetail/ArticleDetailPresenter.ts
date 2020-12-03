import { GetArticleResponse } from "Responses/ArticleResponses";
import { sendRequest } from "Utils/network";
import Presenter from "Pages/Presenter";
import { ArticleModel } from "Models";

class ArticleDetailPresenter extends Presenter {

  getArticle = async (params: {id?: string, onSucceed: (article: ArticleModel) => void}) => {
    const { id, onSucceed } = params;
    
    sendRequest<any, GetArticleResponse>({
      method: "GET",
      endpoint: `articles/${id}`,
      onSucceed: response => {
        onSucceed(response.article);
      }
    });
  }
}

export default ArticleDetailPresenter;