import React, { useEffect } from 'react';
import Providers from './navigation/Index'

export default function App() {
  return <Providers />
}



// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';


// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import LoginScreen from './screens/LoginScreen';
// import OnboardingScreen from './screens/OnboardingScreen';

// import AsyncStorage from '@react-native-community/async-storage'

// const AppStack = createStackNavigator();

// export default function App() {
//   const [isFirstLaunch, setFirstLaunch] = React.useState(false)

//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then(value => {
//       if (value == null) {
//         AsyncStorage.setItem('alreadyLaunched', 'true')
//         setFirstLaunch(true)
//       } else {
//         setFirstLaunch(false)
//       }
//     })
//   }, [])

//   if (isFirstLaunch == null) {
//     return null
//   } else if (isFirstLaunch == true) {
//     return (
//       <NavigationContainer>
//         <AppStack.Navigator
//           headerMode='none'>
//           <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
//           <AppStack.Screen name="Login" component={LoginScreen} />

//         </AppStack.Navigator>
//       </NavigationContainer>
//     );
//   } else {
//     return (<LoginScreen />)
//   }


// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

