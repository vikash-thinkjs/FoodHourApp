import React, { useState } from "react";
import {
  View,
  Text,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/appProviders/theme";
// import { useFonts as useOswald, Oswald_400Regular } from "expo-font";
// import { useFonts as useLato, Lato_400Regular } from "expo-font";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { getLocalizedText as translate } from "./src/locales/config";

export default function App() {
  const [localeValue, setLocaleValue] = useState("en");
  // const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  // const [latoLoaded] = useLato({ Lato_400Regular });

  // if (!oswaldLoaded || !latoLoaded) {
  //   return null;
  // }

  return (
    <ThemeProvider theme={theme}>
      <View style={{ backgroundColor: "#F1F1F1", padding: 20, marginTop: 50 }}>
        <Text>{translate("selectLanguageText", localeValue)}</Text>
        <RadioButton.Group onValueChange={(value) => setLocaleValue(value)} value={localeValue}>
          <RadioButton.Item label="English" value="en" />
          <RadioButton.Item label="हिंदी" value="hi" />
        </RadioButton.Group>
      </View>

      <RestaurantsScreen localeValue={localeValue} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
