/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Home from './Home';
import List from './List';
import Inputs from './Inputs';
import ScrollViewExample from './ScrollViewExample'
import ImageExample from './ImageExample';

const App: () => Node = () => {
  const [myState, setMyState] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod " +
  "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis " +
    "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
    "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
    "culpa qui officia deserunt mollit anim id est laborum.");

  const updateText = () => setMyState("The state is updated");

  return (
    <SafeAreaView>
      <ImageExample />
    </SafeAreaView>
  );
};

export default App;
