import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';



import Home from '../screen/Home';
import Perfil from '../components/homeRenderOptions/Perfil';
import Premium from '../components/homeRenderOptions/Premium';
import Noticias from '../components/homeRenderOptions/Noticias';
import Logout from '../components/homeRenderOptions/Logout';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {

    const screenOptions = (route, color) => {
        let iconName;
        switch (route.name){
            case 'Home':
                iconName = 'home';
                break;
            case 'Noticias':
                iconName = 'email-newsletter';
                break;
            case 'Perfil':
                iconName = 'account';
                break;
            case 'Premium':
                iconName = 'cart';
                break;
            case 'Logout':
                iconName = 'logout';
                break;

        }
        return(
            <Icon
                type='material-community'
                name={iconName}
                size={22}
                color={color}
            />
        )
    }
  return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
               
                    tabBarActiveTintColor: "#114539",
                    tabBarInactiveTintColor: "#63a8a0",
                    tabBarStyle: [
                      {
                        display: "flex"
                      },
                      null
                    ],
                  
                tabBarIcon: ({ color }) => screenOptions(route, color)
            })}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ title: '', headerShown:false }}
            />
            <Tab.Screen
                name="Noticias"
                component={Noticias}
                options={{ title: '', headerShown:false }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{ title: '', headerShown:false }}
            />
            <Tab.Screen
                name="Premium"
                component={Premium}
                options={{ title: '', headerShown:false }}
            />
            <Tab.Screen
                name="Logout"
                component={Logout}
                options={{ title: '', headerShown:false }}
            />
        </Tab.Navigator>
  )
}
