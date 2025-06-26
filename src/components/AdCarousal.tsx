import { StyleSheet, Text, View, Image } from "react-native";
import React, { FC } from "react";
import Carousel from "react-native-reanimated-carousel";

import { Dimensions } from "react-native";
import ScalePress from "./ScalePress";


const AdCarousal: FC<{ adData: any }> = ({ adData }) => {
  const screenWidth = Dimensions.get("window").width;
  const baseOptions = {
    vertical: false,
    width: screenWidth,
    height: screenWidth * 0.5,
  };

  return (
    <View style={{  marginVertical: 20 }}>
      <Carousel
        {...baseOptions}
        loop
        pagingEnabled
        snapEnabled
        autoPlay
        autoPlayInterval={3000}
        mode='parallax'
        data={adData}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 0,
        }}
        renderItem={({ item }: any) => {
          return (
            <ScalePress
              style={{
                width: screenWidth,
               
              }}
              onPress={() => {
                // TODO: handle press event, e.g., navigate or show details
              }}
            >
              <Image source={item} style={{
                width: screenWidth,
                height: screenWidth * 0.5,
                borderRadius: 20,
                overflow: "hidden",
               
              }} />
            </ScalePress>
          );
        }}
      />
    </View>
  );
};

export default AdCarousal;

const styles = StyleSheet.create({});
