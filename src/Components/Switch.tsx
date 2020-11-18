import { Route, Switch as ReactSwitch } from 'react-router-dom';
import * as React from "react";
import { ArticleListPage, HomePage } from '../Pages';

class Switch extends React.Component {
  render() {
    return (
      <ReactSwitch>
        <Route exact path={HomePage.route} component={HomePage} />
        <Route exact path={ArticleListPage.route} component={ArticleListPage} />
      </ReactSwitch>
    );
  }
}

export default Switch;