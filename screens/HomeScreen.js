import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PostCard from '../components/PostCard';
import { AuthContext } from '../navigation/AuthProvider';
import {
	Container,
} from '../styles/HomeStyle';
import fb from "../config/InitFirebase";
const Test = []
var i = 0
const usersCollection = fb.firestore().collection("posts").get()
	.then(function (querySnapshot) {
		querySnapshot.forEach(function (doc) {
			// doc.data() is never undefined for query doc snapshots
			var post = {
				id: i++,
				userName: doc.data("userName"),
				post: doc.data("post")
			}
			console.log(doc.data());
			Test.push(post);
		});
	});

const Posts = [
	{
		id: '1',
		userName: 'Jenny Doe',
		userImg: require('../assets/favicon.png'),
		postTime: '4 mins ago',
		post: 'Hey there, this is my test for a post of my service app in React Native.',
	},
	{
		id: '2',
		userName: 'John Doe',
		userImg: require('../assets/favicon.png'),
		postTime: '2 hours ago',
		post: 'Hey there, this is my test for a post of my service app in React Native.',
	},
	{
		id: '3',
		userName: 'Ken William',
		userImg: require('../assets/favicon.png'),
		postTime: '1 hours ago',
		post: 'Hey there, this is my test for a post of my service app in React Native.',
	},
	{

		id: '4',
		userName: 'Selina Paul',
		userImg: require('../assets/favicon.png'),
		postTime: '1 day ago',
		post: 'Hey there, this is my test for a post of my service app in React Native.',
	},
	{
		id: '5',
		userName: 'Christy Alex',
		userImg: require('../assets/favicon.png'),
		postTime: '2 days ago',
		post: 'Hey there, this is my test for a post of my service app in React Native.',
	},
];

const HomeScreen = () => {
	const { user, logout } = useContext(AuthContext);
	return (
		<Container>
			<FlatList
				data={Posts}
				renderItem={({ item }) => <PostCard item={item} />}
				keyExtractor={item => item.id}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	);
};
export default HomeScreen;