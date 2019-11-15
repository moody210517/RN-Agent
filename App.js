import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Scene, Router, Stack} from 'react-native-router-flux';

import Login from './src/pages/login';
import Register from './src/pages/register';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Router>
          <Stack key="root" duration={0}>
            <Scene
              key="Login"
              hideNavBar={true}
              component={Login}
              title="Login"
              initial={true}
            />

            <Scene
              key="Register"
              hideNavBar={true}
              component={Register}
              title="Register"
              initial={false}
            />
          </Stack>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
