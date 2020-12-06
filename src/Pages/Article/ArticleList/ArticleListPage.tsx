import { List } from "@fluentui/react";
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { WithNavbar } from 'Components';
import { GlobalProps, mapDispatchToProps, mapStateToProps } from "Redux/Map";
import ArticleItem from "./ArticleItem/ArticleItem";
import { default as Presenter } from "./ArticleListPresenter";
import { useHistory } from "react-router-dom";
import './ArticleListPage.scss';

const ArticleListPage: FunctionComponent<GlobalProps> = (props: GlobalProps) => {
  const presenter = new Presenter(props);
  const { articles } = props;
  const history = useHistory();

  if (articles.length == 0) {
    presenter.getArticles();
  }

  return (
    <WithNavbar>
      <List
        className='list'
        items={articles}
        onRenderCell={(article, index) => {
          return (
            <div style={{ marginTop: index != 0 ? 20 : 0 }}>
              <ArticleItem
                article={article}
                onSelect={() => {
                  presenter.read(article?.id);
                  history.push(`/articles/${article?.id}`);
                }}
              />
            </div>
          );
        }}
      />
    </WithNavbar>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticleListPage
);
