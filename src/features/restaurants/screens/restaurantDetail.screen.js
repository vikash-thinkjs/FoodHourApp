import React from "react";
import styled from "styled-components";
import { SafeAreaView } from "react-native";
import RestaurantsInfoCard from "../components/restaurants-info-card";

// const SafeAreaContainer = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar?.currentHeight && `marginTop: ${StatusBar?.currentHeight}px`};
// `;
const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
`;

const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route?.params;
  return (
    <SafeAreaContainer>
      <RestaurantsInfoCard restaurant={restaurant} />
    </SafeAreaContainer>
  )
}

export default RestaurantDetailScreen;