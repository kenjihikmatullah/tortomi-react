import { ReactNode } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "./Reducers";
import { storeArticles } from "./Actions/ArticleAction";
import { storeTreatments } from "./Actions/TreatmentAction";

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  // Article
  storeArticles,

  // Treatment
  storeTreatments
}, dispatch);

const mapStateToProps = (state: AppState) => {
  return {
    articles: state.ARTICLE.articles,
    treatments: state.TREATMENT.treatments
  };
}

export type GlobalProps = Readonly<{ children?: ReactNode }> & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export {
  mapDispatchToProps,
  mapStateToProps
};

