import React from "react";
import { createNativeStackNavigator, TransitionPresets } from "@react-navigation/native-stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurantDetail.screen";

const RestaurantsNavigator = () => {
    const RestaurantStack = createNativeStackNavigator();

  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets?.ModalPresentationIOS }}>
        <RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen} />
        <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
    </RestaurantStack.Navigator>
  )
}

export default RestaurantsNavigator;