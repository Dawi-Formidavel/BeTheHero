import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents'
import Details from './pages/Details'

export default function Routes() {
    return (
        <NavigationContainer screenOptions={{ HeaderShown: false }}>
            <AppStack.Navigator>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}