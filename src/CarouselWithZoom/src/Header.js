import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ onClose }) => {
  return (
    <TouchableOpacity style={styles.crossContainer} onPress={onClose}>
      <Text style={styles.cross}>✕</Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  crossContainer: {
    position: "absolute",
    backgroundColor: "transparent",
    right: 30,
    top: 30,
    zIndex: 10000,
  },
  cross: {
    color: "white",
    fontSize: 30,
  },
});
