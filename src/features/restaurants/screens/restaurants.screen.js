import React, { useContext } from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";

import RestaurantsInfoCard from "../components/restaurants-info-card";
import Search from "../components/search.bar";
import { restaurantListData } from "../../../restaurantListData";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const LoaderContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loader = styled(ActivityIndicator)`
  margin-left: -25px;
`;

// const SafeAreaContainer = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar?.currentHeight && `marginTop: ${StatusBar?.currentHeight}px`};
// `;
const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const RESTAURANTS_DATA = restaurantListData;

  return (
    <SafeAreaContainer>
      {isLoading && (
        <LoaderContainer>
          <Loader
            size={50}
            animating={true}
          />
        </LoaderContainer>
      )}

      <Search />

      <FlatList
        data={restaurants}
        renderItem={(item) => {
          return (
            <TouchableOpacity onPress={() => navigation?.navigate("RestaurantDetail", {restaurant: item})}>
              <RestaurantsInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item?.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaContainer>
  );
};

export default RestaurantsScreen;
