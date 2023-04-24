import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";


import MapsScreen from "../../features/restaurants/screens/maps.screen";
import SettingsScreen from "../../features/restaurants/screens/settings.screen";
import RestaurantsNavigator from "./restaurant.navigator";
import { LocalizationContext } from "../../services/localization/localize.context";
import { getLocalizedText as translate } from "../../locales/config";

const AppNavigator = () => {
    const { localeValue } = useContext(LocalizationContext);
    const Tab = createBottomTabNavigator();

    const TAB_ICONS = {
        Restaurants: "restaurant",
        Maps: "md-map",
        Settings: "settings",
      };
    
      const TAB_ICONS_OUTLINE = {
        Restaurants: "restaurant-outline",
        Maps: "md-map-outline",
        Settings: "settings-outline",
      };

    const createScreenOptions = ({ route }) => {
        const iconFilledName = TAB_ICONS[route?.name];
        const iconOutlineName = TAB_ICONS_OUTLINE[route?.name];
        return {
            tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? iconFilledName : iconOutlineName} size={size} color={color} />
            ),
            // tabBarStyle: [{ height: 60 }],
            tabBarActiveTintColor: "#5a189a",
            tabBarInactiveTintColor: "gray",
        }
    };

    const restaurantsTabName = translate("restaurantsHeaderText", localeValue);
    const mapsHeaderName = translate("mapsHeaderText", localeValue);
    const settingsHeaderName = translate("settingsHeaderText", localeValue);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name={restaurantsTabName} component={RestaurantsNavigator} />
        <Tab.Screen name={mapsHeaderName} component={MapsScreen} />
        <Tab.Screen name={settingsHeaderName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator