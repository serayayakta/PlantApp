import React from "react";
import { Button, Text, Image } from "react-native";
import { HomeScreen } from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const OnboardingScreen = ({ navigation }) => {
  return (
    <>
      <Text>Welcome to PlantApp</Text>
      <Text>Identify more than 3000+ plants and 88% accuracy.</Text>
      <Image
        source={require("../assets/PlantAppOnboardingImage.png")}
        style={{ width: 375, height: 499 }}
      />
      <Button title="Get Started" onPress={() => navigation.navigate("Home")} />
      <Text>
        By tapping next, you are agreeing to PlantID Terms of Use & Privacy
        Policy.
      </Text>
    </>
  );
};
