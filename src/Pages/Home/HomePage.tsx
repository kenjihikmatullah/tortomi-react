import { List } from "@fluentui/react";
import React from "react";
import { connect } from "react-redux";
import { GlobalProps, mapDispatchToProps, mapStateToProps } from "Redux/Map";
import { WithNavbar } from '../../Components';
import ArticleItem from "../Article/ArticleList/ArticleItem/ArticleItem";

class HomePage extends React.Component<GlobalProps> {
  static route = '/';

  render() {
    const { articles } = this.props;

    return (
      <WithNavbar>

        {/* TODO: headline */}

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
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  HomePage
);