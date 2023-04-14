import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import { getLocalizedText as translate } from "../../../locales/config";

const CardContainer = styled(Card)`
  background-color: ${(props) => props?.theme?.colors?.bg?.primary};
  margin-bottom: ${(props) => props?.theme?.space[3]};
`;

const CardCover = styled(Card.Cover)`
  background-color: ${(props) => props?.theme?.colors?.bg?.primary};
  padding: ${(props) => props?.theme?.space[3]};
`;

const RestaurantInfo = styled.View`
  padding: ${(props) => props?.theme?.space[3]};
`;

const Title = styled.Text`
  font-size: ${(props) => props?.theme?.fontSizes?.body};
  font-weight: ${(props) => props?.theme?.fontWeights?.bold};
`;

const Address = styled.Text``;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Rating = styled.View`
  flex-direction: row;
  paddingVertical: ${(props) => props?.theme?.space[1]};
`;

const RestaurantsInfoCard = ({ restaurants, localeValue }) => {
  const { 
    id,
    name,
    restaurantCover,
    rating,
    address,
    isOpenNow,
  } = restaurants?.item;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  const isOpenIcon = "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/null/external-Open-coffee-smashingstocks-flat-smashing-stocks.png";
  const isClosedIcon = "https://img.icons8.com/external-kosonicon-flat-kosonicon/64/null/external-label-ecommerce-kosonicon-flat-kosonicon-2.png";

  return (  
    <CardContainer elevation={5}>
      <CardCover key={id} source={{ uri: restaurantCover[0] }}/>
      <RestaurantInfo>
        <Title>{translate(name, localeValue)}</Title>
        <Section>
        <Rating>
        {ratingArray?.map((item, index) => {
          return <SvgXml key={index} width={20} height={20} xml={star} />
        })}
        </Rating>
        <Image style={{ width: 30, height: 30 }} source={{ uri: isOpenNow ? isOpenIcon : isClosedIcon }} />
        </Section>
        <Address>{translate(address, localeValue)}</Address>
      </RestaurantInfo>
    </CardContainer>
  );
};

export default RestaurantsInfoCard;
