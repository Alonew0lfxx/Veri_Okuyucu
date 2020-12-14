/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/HomePage';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name="HomePage" component={HomePage} options={{
                    headerShown:false //Toolbar'ı gizler.
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default App;
