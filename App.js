import React from 'react';
import { Login, Recipe ,Splash} from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import { store } from "./redux/Store";

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store = {store}>

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Recipe"
                    component={Recipe}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default App;