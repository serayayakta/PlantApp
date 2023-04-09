import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export const OnboardingScreen = () => {
  const Next = () => (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        {0 === 0 ? "Get Started" : "Continue"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Onboarding
        //showNext={false}
        NextButtonComponent={Next}
        showSkip={false}
        bottomBarHighlight={false}
        imageContainerStyles={styles.container}
        pages={[
          {
            title: "",
            subtitle: "",
            backgroundColor: "transparent",
            image: (
              <SafeAreaView style={styles.pages}>
                <View style={{ width: "100%" }}>
                  <Text>
                    <Text style={styles.getStartedTitle}>Welcome to</Text>{" "}
                    <Text style={styles.getStartedTitleBold}>PlantApp</Text>
                  </Text>
                  <Text style={styles.getStartedSubtitle}>
                    Identify more than 3000+ plants and 88% accuracy.
                  </Text>
                  <Image
                    style={styles.getStartedImage}
                    source={require("../assets/PlantAppOnboardingImage.png")}
                  />
                </View>
              </SafeAreaView>
            ),
          },
          {
            title: "",
            subtitle: "",
            backgroundColor: "transparent",
            image: (
              <SafeAreaView style={styles.pages}>
                <View style={{ width: "100%" }}>
                  <Text>
                    <Text style={styles.onboardingText}>Take a photo to </Text>
                    <Text style={styles.onboardingTextBold}>
                      identify{"\n"}
                    </Text>

                    <Text style={styles.onboardingText}>the plant!</Text>
                  </Text>
                  <Image
                    style={styles.getStartedImage}
                    source={require("../assets/Phone.png")}
                  />
                </View>
              </SafeAreaView>
            ),
          },
          {
            title: "",
            subtitle: "",
            backgroundColor: "transparent",
            image: (
              <SafeAreaView style={styles.pages}>
                <View style={{ width: "100%" }}>
                  <Text>
                    <Text style={styles.onboardingText}>Get plant</Text>
                    <Text style={styles.onboardingTextBold}> care guides</Text>
                  </Text>
                  <Image
                    style={styles.getStartedImage}
                    source={require("../assets/PasteYourDesignHere.png")}
                  />
                </View>
              </SafeAreaView>
            ),
          },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: "fixed",
    top: 678,
    bottom: "131",
    height: "56px",
    width: "327px",
    right: "24px",
    borderRadius: "12px",
    backgroundColor: "#28AF6E",
  },
  buttonText: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "15px",
    color: "#FFFFFF",
    lineHeight: "24px",
    height: "56px",
    width: "327px",
    alignItems: "center",
  },
  container: {
    position: "relative",
    top: "70px",
    marginHorizontal: "20px",
    marginTop: 0,
    paddingTop: 0,
    flex: 1,
    display: "flex",
    alignSelf: "flex-start",
  },
  pages: {
    position: "absolute",
    left: "0px",
    top: "0px",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "flex-start",
  },
  getStartedTitle: {
    width: "286px",
    height: "33px",
    fontSize: "28px",
    lineHeight: "33px",
    letterSpacing: "0.07px",
    fontWeight: "400",
    color: "#13231B",
    //fontFamily: "Rubik",
  },
  getStartedTitleBold: {
    width: "286px",
    height: "33px",
    fontSize: "28px",
    lineHeight: "33px",
    letterSpacing: "0.07px",
    fontWeight: "700",
    color: "#13231B",
    //fontFamily: "Rubik",
  },
  getStartedSubtitle: {
    width: "300px",
    height: "44px",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.07px",
    fontWeight: "400",
    color: "rgba(19, 35, 27, 0.7)",
    marginTop: "8px",
    //fontFamily: "Rubik",
  },
  getStartedImage: {
    height: "499px",
    width: "375px",
    resizeMode: "contain",
  },
  onboardingText: {
    width: "303px",
    height: "66px",
    fontSize: "28px",
    lineHeight: "33px",
    letterSpacing: "-1px",
    fontWeight: "500",
    color: "#13231B",
    //fontFamily: "Rubik",
  },
  onboardingTextBold: {
    width: "303px",
    height: "66px",
    fontSize: "28px",
    lineHeight: "33px",
    letterSpacing: "-1px",
    fontWeight: "800",
    color: "#13231B",
    //fontFamily: "Rubik",
  },
});
