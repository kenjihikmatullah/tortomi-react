import React from 'react';
import { connect } from 'react-redux';
import { GlobalProps, mapDispatchToProps, mapStateToProps } from '../../Redux/Map';
import { Navbar } from '../index';
import './WithNavbar.scss';

class WithNavbar extends React.Component<GlobalProps> {
  render() {
    const { children } = this.props;

    return (
      <div className='with-navbar'>

        <Navbar />

        <div className='children'>
          {children}
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  WithNavbar
);