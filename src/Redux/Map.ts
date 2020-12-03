import { ReactNode } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "./Reducers";
import { storeArticles, selectArticle } from "./Actions/ArticleAction";

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  // Article
  storeArticles,
  selectArticle
}, dispatch);

const mapStateToProps = (state: AppState) => {
  return {
    articles: state.ARTICLE.articles,
    selectedArticle: state.ARTICLE.selectedArticle
  };
}

export type GlobalProps = Readonly<{ children?: ReactNode }> & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export {
  mapDispatchToProps,
  mapStateToProps
};

