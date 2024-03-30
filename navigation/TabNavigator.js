import {Image} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from "./HomeStack"
import WishListStack from "./WishListStack"
import MyBooksStack from "./MyBooksStack"

const Tab=createBottomTabNavigator();

const TabNavigator=()=>{
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon:({focused,size})=>{
                    let IconName
                    if(route.name==='Home'){
                        IconName='home';
                        size=focused?25:20
                    }
                    else if(route.name==='WishList'){
                        IconName='wishList';
                        size=focused?25:20
                    }
                    else if(route.name==='MyBooks'){
                        IconName='MyBooks';
                        size=focused?25:20
                    }
                    return(
                        <Image src={{uri:focused?`https://raw.githubusercontent.com/sunnywang930410/starsimg/main/${IconName}_active.png`:`https://raw.githubusercontent.com/sunnywang930410/starsimg/main/${IconName}.png?`}}/>
                    )
                }
            })} 
        >
            <Tab.Screen name="home" component={HomeStack} options={{headerShown: false}}/>
            <Tab.Screen name="wishlist" component={WishListStack} options={{headerShown: false}}/>
            <Tab.Screen name="mybooks" component={MyBooksStack} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}

export default TabNavigator