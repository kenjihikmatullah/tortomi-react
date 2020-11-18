import { List } from "@fluentui/react";
import React from "react";
import { connect } from "react-redux";
import { WithNavbar } from '../../../Components';
import { GlobalProps, mapDispatchToProps, mapStateToProps } from "../../../Redux/Map";
import ArticleItem from "./ArticleItem/ArticleItem";

class ArticleListPage extends React.Component<GlobalProps> {
  static route = '/articles';

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
