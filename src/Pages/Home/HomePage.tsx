import { List, Text } from "@fluentui/react";
import TreatmentItem from "Pages/Treatment/TreatmentList/TreatmentItem/TreatmentItem";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GlobalProps, mapDispatchToProps, mapStateToProps } from "Redux/Map";
import { WithNavbar } from '../../Components';
import ArticleItem from "../Article/ArticleList/ArticleItem/ArticleItem";
import { default as Presenter } from './HomePagePresenter';
import "./HomePage.scss";

class HomePage extends React.Component<GlobalProps> {
  static route = '/';
  presenter: Presenter | undefined;

  componentDidMount() {
    const { articles, treatments } = this.props;

    this.presenter = new Presenter(this.props);
    if (articles.length == 0) this.presenter?.getArticles();
    if (treatments.length == 0) this.presenter?.getTreatments();
  }

  render() {
    const { articles, treatments } = this.props;

    document.title = 'Tortomi - Artikel dan Tips Mengobati Kura-Kura';

    return (
      <WithNavbar>
        <main>
          <Text variant={'large'} nowrap>
            Artikel
          </Text>

          <List
            // className='list'
            renderCount={10}
            items={articles}
            onRenderCell={(article, index) => {
              return (
                <div className='item'>
                  <Link
                    to={`/articles/${article?.id}`}
                    onClick={() => this.presenter?.readArticle(article?.id)}>
                    <ArticleItem
                      article={article}
                    />
                  </Link>
                </div>
              );
            }}
          />

          <div className="treatments">
            <Text variant={'large'} nowrap>
              Perawatan Kura-Kura
            </Text>

            <List
              className='list'
              items={treatments}
              onRenderCell={(treatment, index) => {
                return (
                  <div className='item'>
                    <Link
                      to={`/treatments/${treatment?.id}`}
                      onClick={() => this.presenter?.readTreatment(treatment?.id)}>
                      <TreatmentItem
                        treatment={treatment}
                      />
                    </Link>
                  </div>
                );
              }}
            />
          </div>
        </main>
      </WithNavbar>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  HomePage
);