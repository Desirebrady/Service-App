import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native';
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStackScreen = ({ navigation }) => (
	<HomeStack.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: '#009387'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	}}
	>
		<HomeStack.Screen name='Home' component={HomeScreen} options={{
			title: 'Overview',
			headerLeft: () => (
				<Button name='ios-menu' size={25}
					backgroundColor='#009387'
					options={() => navigation.openDrawer()}
				/>
			)
		}} />


	</HomeStack.Navigator>
)

const AppStack = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Home' component={HomeScreen} />
			<Drawer.Screen name='Profile' component={ProfileScreen} />
		</Drawer.Navigator>
	);
}

export default AppStack;