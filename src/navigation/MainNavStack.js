import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CleanerScreen from "../screens/CleanerScreen";
import DetailsScreen from "../screens/DetailsScreen";
import FavScreen from "../screens/FavScreen";
import PastJobsScreen from "../screens/PastJobsScreen";
import ResetPassword from "../screens/ResetPassScreen";
import VerifyEmail from "../screens/VerifyEmail";
const Stack = createNativeStackNavigator();

const MainNavStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cleaner"
                    component={CleanerScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Favourites"
                    component={FavScreen}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="PastJobs"
                    component={PastJobsScreen}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="ResetPass"
                    component={ResetPassword}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="Verify"
                    component={VerifyEmail}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavStack;
