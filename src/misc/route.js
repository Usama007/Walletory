import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import TabContainer from '../screens/tabContainer';
import Registraion from '../screens/registration';

const Stack = createNativeStackNavigator();

const Route = () => {
    const login = useSelector(state => state.login)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {login.isLoggedIn == false ? (<Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />) : (
                    <Stack.Screen name="TabContainer" options={{ headerShown: false }} component={TabContainer} />
                )}
                <Stack.Screen name="Registraion" options={{ headerShown: false }} component={Registraion} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Route
