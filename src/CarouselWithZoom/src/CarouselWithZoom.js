import React, { useState, useRef } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  Modal,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import CarouselSlider from "./CarouselSlider";
import ImageViewer from "react-native-image-zoom-viewer";

import Header from "./Header";

const CarouselWithZoom = ({ images: productImages, height, favorited }) => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [showModal, setShowModel] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const images = productImages.map((picture) => {
    return picture.url;
  });

  const getCaroselIndex = (index) => {
    console.log("getCaroselIndex ", index);
    setcurrentIndex(index);
    // setImageIndex(index);
  };

  const closeModal = () => {
    setShowModel(false);
  };

  const onPress = (i) => {
    console.log("index pressed", i);
  };

  const onPressImg = (i) => {
    console.log("onPressImg pressed", i);
    setShowModel(true);
    // setImageIndex(i);
  };

  const updateIndex = (i, fromCarousel) => {
    console.log("updated value of i is**", i + 1);
    // setImageIndex(i);
    setcurrentIndex(i + 1);
  };

  return (
    <View style={styles.container}>
      <Modal onRequestClose={closeModal} visible={showModal} transparent={true}>
        <ImageViewer
          renderHeader={() => <Header onClose={() => closeModal()} />}
          onChange={updateIndex}
          saveToLocalByLongPress={false}
          imageUrls={productImages}
          index={currentIndex - 1}
        />
      </Modal>

      <CarouselSlider
        images={images}
        height={height}
        getCaroselIndex={getCaroselIndex}
        onPressImg={onPressImg}
        initialPage={currentIndex}
        // initialPage={imageIndex}
      />

      <View style={styles.imgCount}>
        <Text style={styles.imgCountText}>
          {currentIndex} of {images.length}
        </Text>
      </View>

      <View style={styles.actionIcons}>
        <FontAwesome5
          name="flag"
          style={{ position: "relative", top: 5 }}
          size={24}
          color="#ffffff"
        />
        <View style={styles.divider} />
        <FontAwesome5
          name="share-alt"
          style={{ position: "relative", top: 5 }}
          size={25}
          color="#ffffff"
        />
        <View style={styles.divider} />
        {favorited ? (
          <AntDesign name="heart" size={24} color="#4F8B39" />
        ) : (
          <AntDesign name="hearto" size={24} color="#4F8B39" />
        )}
      </View>
    </View>
  );
};

export default CarouselWithZoom;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  barContainer: {
    position: "absolute",
    zIndex: 2,
    bottom: 40,
    flexDirection: "row",
  },
  skip: {
    position: "absolute",
    zIndex: 2,
    bottom: 80,
    flexDirection: "row",
  },
  track: {
    backgroundColor: "#ccc",
    overflow: "hidden",
    height: 2,
  },
  bar: {
    backgroundColor: "#5294d6",
    height: 2,
    position: "absolute",
    left: 0,
    top: 0,
  },
  imgCount: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  imgCountText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  actionIcons: {
    position: "absolute",
    bottom: 15,
    right: 15,
    flexDirection: "row",
  },
  divider: {
    padding: 10,
  },
});
