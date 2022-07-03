import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, Image, Animated } from "react-native";

const Test = () => {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 100,
      duration: 1000,
      // useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    console.log("yyy");
    console.log("anim is ", anim);
    let page_number = anim.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 100],
    });
    console.log("page number is", page_number);
  }, [anim]);

  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: anim.interpolate({
          inputRange: [0, 100],
          outputRange: ["orange", "blue"],
        }),
        opacity: anim.interpolate({
          inputRange: [25, 50, 100],
          // inputRange: [0, 50, 100],
          outputRange: [0, 1, 0],
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        transform: [
          { translateX: anim },
          {
            rotate: anim.interpolate({
              inputRange: [0, 100],
              outputRange: ["0deg", "360deg"],
            }),
          },
        ],
      }}
    ></Animated.View>
  );
};

export default Test;

const styles = StyleSheet.create({});
