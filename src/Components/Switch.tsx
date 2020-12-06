import { Route, Switch as ReactSwitch } from 'react-router-dom';
import * as React from "react";
import { 
  // Home
  HomePage,

  // About
  AboutUsPage,

  // Article
  ArticleListPage,
  ArticleDetailPage 
} from 'Pages';

class Switch extends React.Component {
  render() {
    return (
      <ReactSwitch>
        <Route exact path={HomePage.route} component={HomePage} />
        <Route exact path='/articles' component={ArticleListPage} />
        <Route path='/articles/:id' component={ArticleDetailPage} />
        <Route exact path='/about-us' component={AboutUsPage} />
      </ReactSwitch>
    );
  }
}

export default Switch;