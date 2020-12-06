import { TreatmentModel } from "Models";

interface GetTreatmentsResponse extends Response {
  treatments: TreatmentModel[];
}

interface GetTreatmentDetailResponse extends Response {
  treatment: TreatmentModel;
}

export type {
  GetTreatmentsResponse,
  GetTreatmentDetailResponse
};