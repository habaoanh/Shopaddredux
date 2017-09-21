
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';


import { SideMenu } from './Routers';
import store from './redux/store';

StatusBar.setHidden(true);

export default class Apps extends Component {
  
    render() {
        return (
            <Provider store={store}>
            <SideMenu />
            </Provider>
        );
    }
}
