import React, { useContext } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { LocalizationContext } from "../../../services/localization/localize.context";
import { getLocalizedText as translate } from "../../../locales/config";

const SettingsScreen = () => {
    const localizationContext = useContext(LocalizationContext);
    const { localeValue, setLocaleValue } = localizationContext;

    return (
        <View style={{ backgroundColor: "#F1F1F1", padding: 20 }}>
            <Text>{translate("selectLanguageText", localeValue)}</Text>
            <RadioButton.Group onValueChange={(value) => setLocaleValue(value)} value={localeValue}>
            <RadioButton.Item label="English" value="en" />
            <RadioButton.Item label="हिंदी" value="hi" />
            </RadioButton.Group>
        </View>
    );
}

export default SettingsScreen;
