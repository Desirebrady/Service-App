import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {

	const Dots = ({ selected }) => {
		let backgroundColor;

		backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

		return (
			<View
				style={{
					width: 6,
					height: 6,
					marginHorizontal: 3,
					backgroundColor
				}}
			/>
		);
	}

	const Skip = ({ ...props }) => (
		<TouchableOpacity
			style={{ marginHorizontal: 10 }}
			{...props}
		>
			<Text style={{ fontSize: 16 }}>Skip</Text>
		</TouchableOpacity>
	);

	const Next = ({ ...props }) => (
		<TouchableOpacity
			style={{ marginHorizontal: 10 }}
			{...props}
		>
			<Text style={{ fontSize: 16 }}>Next</Text>
		</TouchableOpacity>
	);

	const Done = ({ ...props }) => (
		<TouchableOpacity
			style={{ marginHorizontal: 10 }}
			{...props}
		>
			<Text style={{ fontSize: 16 }}>Done</Text>
		</TouchableOpacity>
	);

	return (
		<Onboarding
			SkipButtonComponent={Skip}
			NextButtonComponent={Next}
			DoneButtonComponent={Done}
			DotComponent={Dots}
			onSkip={() => navigation.replace("Login")}
			onDone={() => navigation.navigate("Login")}
			pages={[
				{
					backgroundColor: '#a6e4d0',
					image: <Image source={require('../assets/favicon.png')} />,
					title: 'Welcome',
					subtitle: 'Done with React Native Onboarding Swiper',
				},
				{
					backgroundColor: '#fdeb93',
					image: <Image source={require('../assets/favicon.png')} />,
					title: 'Simple',
					subtitle: 'Done with React Native Onboarding Swiper',
				},
				{
					backgroundColor: '#e9bcbe',
					image: <Image source={require('../assets/favicon.png')} />,
					title: 'Fast',
					subtitle: 'Done with React Native Onboarding Swiper',
				},

			]}
		/>
	);
}


export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
