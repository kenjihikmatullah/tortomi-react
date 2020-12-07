import { HomePage } from "Pages";
import Presenter from "Pages/Presenter";
import { GetArticlesResponse } from "Responses/ArticleResponses";
import { GetTreatmentsResponse } from "Responses/TreatmentResponse";
import { sendRequest } from "Utils/network";

class HomePagePresenter extends Presenter {

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

  readArticle = async (id?: number) => {
    sendRequest<any, any>({
      method: 'POST',
      endpoint: `articles/${id}/read`,
    });
  }

  getTreatments = async () => {
    const { storeTreatments } = this.props;

    sendRequest<any, GetTreatmentsResponse>({
      method: 'GET',
      endpoint: 'treatments',
      onSucceed: response => {
        storeTreatments(response.treatments)
      }
    });
  }

  readTreatment = async (id?: number) => {
    sendRequest<any, any>({
      method: 'POST',
      endpoint: `treatments/${id}/read`
    });
  }
}

export default HomePagePresenter;