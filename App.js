/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
} from 'react-native';

import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/reducers/Providers';

const App = () => {
	return (
		<GlobalProvider>
			<AppNavContainer />
		</GlobalProvider>
	);
};

const styles = StyleSheet.create({

});

export default App;
