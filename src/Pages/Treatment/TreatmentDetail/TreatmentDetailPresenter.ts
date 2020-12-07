
import { sendRequest } from "Utils/network";
import Presenter from "Pages/Presenter";
import { ArticleModel, TreatmentModel } from "Models";
import { GetTreatmentDetailResponse } from "Responses/TreatmentResponse";

class ArticleDetailPresenter extends Presenter {

  getTreatment = async (params: {id?: string, onSucceed: (treatment: TreatmentModel) => void}) => {
    const { id, onSucceed } = params;
    
    sendRequest<any, GetTreatmentDetailResponse>({
      method: "GET",
      endpoint: `treatments/${id}`,
      onSucceed: response => {
        onSucceed(response.treatment);
      }
    });
  }
}

export default ArticleDetailPresenter;