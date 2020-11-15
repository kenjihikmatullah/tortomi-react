import React from "react";
import { WithNavbar } from '../../Components';
import { Text } from 'office-ui-fabric-react/lib/Text';

class HomePage extends React.Component {
  static route = '/';

  render() {
    return (
      <WithNavbar>
        <Text>Halo</Text>
      </WithNavbar>
    )
  }
}

export default HomePage;