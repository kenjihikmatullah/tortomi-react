import { List, Text } from "@fluentui/react";
import React, { FunctionComponent as Component, useEffect } from "react";
import { connect } from "react-redux";
import { WithNavbar } from 'Components';
import { GlobalProps, mapDispatchToProps, mapStateToProps } from "Redux/Map";
import ArticleItem from "./ArticleItem/ArticleItem";
import { default as Presenter } from "./ArticleListPresenter";
import { Link } from "react-router-dom";
import './ArticleListPage.scss';

const ArticleListPage: Component<GlobalProps> = (props: GlobalProps) => {
  const presenter = new Presenter(props);
  const { articles } = props;

  document.title = 'Artikel Tentang Kura-Kura';

  if (articles.length == 0) {
    presenter.getArticles();
  }

  return (
    <WithNavbar>

      <main>
        <Text variant={'xLarge'} nowrap>
          Artikel
        </Text>

        <List
          className='list'
          items={articles}
          onRenderCell={(article, index) => {
            return (
              <div className='item'>
                <Link
                  to={`/articles/${article?.id}`}
                  onClick={() => presenter.read(article?.id)}>
                  <ArticleItem
                    article={article}
                  />
                </Link>
              </div>
            );
          }}
        />
      </main>
    </WithNavbar>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticleListPage
);
