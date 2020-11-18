import { ArticleModel } from "../../Models";
import { ArticleAction } from "../Actions";
import ActionType from "../ActionType";

interface State {
  articles: ArticleModel[];
  recommendedArticles: ArticleModel[];
}

const initialState: State = {
  articles: [
    new ArticleModel({title: 'Ini Judul Artikel Yang Panjang', imageUrl: 'https://cdn.techinasia.com/wp-content/uploads/2020/11/d3-bio.jpg'}),
    new ArticleModel({title: 'Ini Judul Artikel Yang Panjang', imageUrl: 'https://cdn.techinasia.com/wp-content/uploads/2020/11/d3-bio.jpg'}),
    new ArticleModel({title: 'Ini Judul Artikel Yang Panjang', imageUrl: 'https://cdn.techinasia.com/wp-content/uploads/2020/11/d3-bio.jpg'}),
  ],
  recommendedArticles: []
};

export default function (state: State = initialState, action: ArticleAction): State {
    switch (action.type) {
      case ActionType.SAVE_ARTICLES: {
        return {
          ...state,
          articles: action.articles ?? []
        };
      }
      
      default: {
        return state;
      }
    }
}