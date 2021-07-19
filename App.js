import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import FlashMessage from "react-native-flash-message";

import AppStack from './src/components/stacks/AppStack';
import Gallery from './src/components/screens/Gallery';

const App = () => {
	return (
		<NavigationContainer>
			<AppStack />
			<FlashMessage position="top" />
		</NavigationContainer>
	);
}

export default App;
