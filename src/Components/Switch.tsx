import { Route, Switch as ReactSwitch } from 'react-router-dom';
import * as React from "react";
import { HomePage } from '../Pages';

export default class Switch extends React.Component {
  render() {
    return (
      <ReactSwitch>
        <Route path={HomePage.route} component={HomePage} />
      </ReactSwitch>
    );
  }
}