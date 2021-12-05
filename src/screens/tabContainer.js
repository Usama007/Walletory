import React from 'react'
import { View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'

import Home from './home';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';

const Tab = createBottomTabNavigator();


const TabContainer = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'home'
                            color = focused ? '#5652A3' : '#979797'
                        } else if (route.name === 'Tab2') {
                            iconName = 'clockcircleo'
                            color = focused ? '#5652A3' : '#979797'
                        } else if (route.name === 'Tab3') {
                            iconName = 'user'
                            color = focused ? '#5652A3' : '#979797'
                        } else if (route.name === 'Tab4') {
                            iconName = 'gift'
                            color = focused ? '#5652A3' : '#979797'
                        } else if (route.name === 'Middle') {
                            return (
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 5,
                                        height: 70,
                                        width: 70,
                                        borderRadius: 58,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <AntDesign name={'upcircle'} size={56} color={'#5652A3'} />
                                </View>
                            )
                        }
                        // You can return any component that you like here!
                        return <AntDesign name={iconName} size={size} color={color} />;
                    },

                })

                }

            >
                <Tab.Screen name="Home" options={{ title: '', headerShown: false }} component={Home} />
                <Tab.Screen name="Tab2" options={{ title: '', headerShown: false }} component={Tab2} />
                <Tab.Screen name="Middle" options={{ title: '', headerShown: false }} component={Home} />
                <Tab.Screen name="Tab3" options={{ title: '', headerShown: false }} component={Tab3} />
                <Tab.Screen name="Tab4" options={{ title: '', headerShown: false }} component={Tab4} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default TabContainer
