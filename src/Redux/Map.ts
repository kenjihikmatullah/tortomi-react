import { Props, ReactNode } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "./Reducers";

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

const mapStateToProps = (state: AppState) => {
  return {
    articles: state.ARTICLE.articles
  };
}

export type GlobalProps = Readonly<{ children?: ReactNode }> & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export {
  mapDispatchToProps,
  mapStateToProps
};

