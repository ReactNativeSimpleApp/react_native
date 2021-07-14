import React from  "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Gallery from '../screens/Gallery';
import Profiles from '../screens/Profiles';

export default MainStack = () => {
    const MainS = createBottomTabNavigator();
    const tabBarOptions = {
        showLabel: true,
        style: {
            backgroundColor: "#222222",
            paddingBottom: 12
        },
    };

    const screensOptions = (({route}) => ({
        tabBarIcon: ({focused}) => {
            let iconName = "i-home"

            switch(route.name) {
                case "Home":
                    iconName = "iso-home"
                    break;
                default:
                    iconName = "iso-home"

            }

            if (route.name === "Gallery"){
                return(
                    <Ionicons name="i-add-sircle" size={48} color="#23a8d9" style={{shadowColor: "#23a8d9",
                    shadowOffset: {width:0, height: 10}, shadowRadius: 10, shadowOpacity: 0.3,
                    }}/>
                )
            }

            return <Ionicons name={iconName} size={24} color={focused ? "#ffffff" : "#666666"}/>
        }
    }))
 return (
    <MainS.Navigator tabBarOptions={tabBarOptions} screensOptions={screensOptions}>
        <MainS.Screen name="Home" component={Home} />
        <MainS.Screen name="Gallery" component={Gallery} />
        <MainS.Screen name="Profiles" component={Profiles} />
    </MainS.Navigator>
 );
};