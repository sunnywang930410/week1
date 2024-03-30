import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen"
import DetailScreen from "../screen/DetailScreen";

const Stack=createNativeStackNavigator();

const HomeStack=()=>{
    return(
         <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={false}/>
            <Stack.Screen name="Detail" component={DetailScreen} options={false}/>
        </Stack.Navigator>
    )
}

export default HomeStack;