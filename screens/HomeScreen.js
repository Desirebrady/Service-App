import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {
	const { user, logout } = useContext(AuthContext);
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<View style={styles.cardHeader}>
					<View style={styles.headerLeft}>
						<Image
							style={styles.userImage}
							source={{
								uri: 'https://reactnative.dev/img/tiny_logo.png',
							}}
						/>
						<Text style={styles.userName}>{user.uid}</Text>
					</View>
					<View style={styles.headerLeft}></View>
				</View>
			</View>
			{/* <Text style={styles.text}>Welcome {user.uid}</Text> */}
		</View>
	);
}

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ddd'
	},
	text: {

		color: '#333333'
	},
	card: {
		backgroundColor: '#fff',
		padding: 5,
		margin: 5,
		borderRadius: 10
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	headerRight: {
		flexDirection: 'row',
	}
	,
	headerLeft: {
		flexDirection: 'row',
	}
	,
	userImage: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2
	}
	,
	userName: {
		// marginTop: 15,
		marginLeft: 10
	}
});