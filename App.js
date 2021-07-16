import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import type {Node} from 'react';
import AppStack from './src/components/stacks/AppStack';
import Gallery from './src/components/screens/Gallery';

const App = () => {
	return (
		<NavigationContainer>
			<AppStack />
		</NavigationContainer>
	);
}

export default App;
