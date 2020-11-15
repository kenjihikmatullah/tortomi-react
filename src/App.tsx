import * as React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch } from './Components';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './Redux/Map';

function App() {
  return (
    <main>
      <Switch />
    </main>
  ); 
}

export default connect(mapStateToProps, mapDispatchToProps)(
  App
);
