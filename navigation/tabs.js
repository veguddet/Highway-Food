import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, Offers, Cart, Profile } from "../screens";
import { COLORS, icons } from "../constants";
import { TabIcon } from '../components';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
           tabBarOptions={{
               showLabel: false,
               style: {
                   display: 'flex',
                   position: 'absolute',
                   bottom: 0,
                   left: 0,
                   right: 0,
                   elevation: 0,
                   backgroundColor: COLORS.white,
                   borderTopColor: "transparent",
                   height: 100
               }
           }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused=
                    {focused} icon={icons.home} />
                }}
            />
            <Tab.Screen
                name="Offers"
                component={Offers}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused=
                    {focused} icon={icons.bookmarkFilled} />
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused=
                    {focused} icon={icons.cart} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused=
                    {focused} icon={icons.user} />
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;