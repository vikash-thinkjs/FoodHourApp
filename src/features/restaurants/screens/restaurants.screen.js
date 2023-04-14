import React, { useState } from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

import RestaurantsInfoCard from "../components/restaurants-info-card";
import { restaurantListData } from "../../../restaurantListData";

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar?.currentHeight && `marginTop: ${StatusBar?.currentHeight}px`};
`;

const SearchBarContainer = styled.View`
  padding: ${(props) => props?.theme?.space[3]};
`;

const RestaurantsScreen = ({ localeValue }) => {
  const RESTAURANTS_DATA = restaurantListData;

  return (
    <SafeAreaContainer>
      <SearchBarContainer>
        <Searchbar />
      </SearchBarContainer>

      <FlatList
        data={RESTAURANTS_DATA}
        renderItem={(item) => <RestaurantsInfoCard restaurants={item} localeValue={localeValue} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaContainer>
  );
};

export default RestaurantsScreen;
