import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
// import { useFonts as useOswald, Oswald_400Regular } from "expo-font";
// import { useFonts as useLato, Lato_400Regular } from "expo-font";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { LocalizationContextProvider } from "./src/services/localization/localize.context";
import Navigation from "./src/infrastructure/navigation";

export default function App() {
  // const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  // const [latoLoaded] = useLato({ Lato_400Regular });

  // if (!oswaldLoaded || !latoLoaded) {
  //   return null;
  // }

  return (
    <ThemeProvider theme={theme}>
      <LocalizationContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </LocalizationContextProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
