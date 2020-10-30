import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();


const HomeStackScreen = ({ navigation }) => (
	<HomeStack.Navigator
	>
		<HomeStack.Screen name="Home"
			component={HomeScreen}
			options={{ header: () => true }} />


	</HomeStack.Navigator>
)

const AppStack = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Home' component={HomeStackScreen} />
			<Drawer.Screen name='Profile' component={ProfileScreen} />
		</Drawer.Navigator>
	);
}

export default AppStack;