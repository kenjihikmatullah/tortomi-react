import Presenter from "Pages/Presenter";
import { GetTreatmentsResponse } from "Responses/TreatmentResponse";
import { sendRequest } from "Utils/network";

class TreatmentListPresenter extends Presenter {

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

  read = async (id?: number) => {
    sendRequest<any, any>({
      method: 'POST',
      endpoint: `treatments/${id}/read`
    });
  }
}

export default TreatmentListPresenter;