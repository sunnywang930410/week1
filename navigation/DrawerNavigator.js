import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screen/HomeScreen';
import AccountScreen from "../screen/AccountScreen"
import SettingScreen from "../screen/SettingScreen"
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="home" component={HomeScreen}
                options={{
                    drawerIcon: ({ focused }) => {
                        return (
                            <Image source={{ uri: focused ? `https://raw.githubusercontent.com/sunnywang930410/starsimg/main/home_active.png` : `https://raw.githubusercontent.com/sunnywang930410/starsimg/main/home.png` }} />
                        )
                    }
                }} />
            <Drawer.Screen name="account" component={AccountScreen}
                options={{
                    drawerIcon: ({ focused }) => {
                        return (
                            <Image source={{ uri: focused ? `https://raw.githubusercontent.com/sunnywang930410/starsimg/main/account_active.png` : `https://raw.githubusercontent.com/sunnywang930410/starsimg/main/account.png` }} />
                        )
                    }
                }} />
            <Drawer.Screen name="setting" component={SettingScreen}
                options={{
                    drawerIcon: ({ focused }) => {
                        return (
                            <Image source={{ uri: focused ? `https://raw.githubusercontent.com/sunnywang930410/starsimg/main/setting_active.png` : `https://raw.githubusercontent.com/sunnywang930410/starsimg/main/setting.png` }} />
                        )
                    }
                }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator