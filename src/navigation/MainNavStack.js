import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

const MainNavStack = () => {
    
    <Stack.Navigator>
            
            <Stack.Screen name='Home' component={SplashScreen}/>
        </Stack.Navigator>

}

export default MainNavStack