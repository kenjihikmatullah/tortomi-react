import { ReactNode } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "./Reducers";
import { storeArticles } from "./Actions/ArticleAction";

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  // Article
  storeArticles
}, dispatch);

const mapStateToProps = (state: AppState) => {
  return {
    articles: state.ARTICLE.articles,
  };
}

export type GlobalProps = Readonly<{ children?: ReactNode }> & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export {
  mapDispatchToProps,
  mapStateToProps
};

