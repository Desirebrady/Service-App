import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStackScreen = ({ navigation }) => (
	<Stack.Navigator>
		<Stack.Screen
			name="Home"
			component={HomeScreen}
			options={{
				headerTitleAlign: 'center',
				headerTitleStyle: {
					color: '#2e64e5',
					fontSize: 18
				},
				headerStyle: {
					shadowColor: '#fff',
					elevation: 0,
				}
			}}
		/>
		<Stack.Screen
			name="Profile"
			component={ProfileScreen}
			options={{
				headerTitleAlign: 'center',
				headerTitleStyle: {
					color: '#2e64e5',
					fontSize: 18
				},
				headerStyle: {
					shadowColor: '#fff',
					elevation: 0,
				}
			}}
		/>
	</Stack.Navigator>
);

const AppStack = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: '#2e64e5',
			}}>
			<Tab.Screen
				name="Home"
				component={HomeStackScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="home"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="ios-person" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default AppStack;