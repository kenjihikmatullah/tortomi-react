import { List } from "@fluentui/react";
import React from "react";
import { connect } from "react-redux";
import { WithNavbar } from '../../../Components';
import { GlobalProps, mapDispatchToProps, mapStateToProps } from "../../../Redux/Map";
import ArticleItem from "./ArticleItem/ArticleItem";
import { default as Presenter } from "./ArticleListPresenter";

class ArticleListPage extends React.Component<GlobalProps> {
  static route = '/articles';
  presenter: Presenter;

  constructor(props: GlobalProps) {
    super(props);

    this.presenter = new Presenter(props);
    this.presenter.getArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <WithNavbar>
        <List
          items={articles}
          onRenderCell={(item, index) => {
            return (
              <div style={{ marginTop: index != 0 ? 20 : 0 }}>
                <ArticleItem
                  article={item}
                />
              </div>
            );
          }}
        />
      </WithNavbar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticleListPage
);
