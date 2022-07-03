import React, { useState, useRef, useEffect } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

/* 
  ##props: 
  images: {url: string}[],
  width: ?number, // the width of the carousel
  height: number, // the height of the carousel

*/

const CarouselSlider = ({
  images,
  height,
  favorited,
  getCaroselIndex,
  onPressImg,
  initialPage,
}) => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const deviceWidth = Dimensions.get("window").width;
  const scrollVal = useRef(new Animated.Value(0)).current;

  const pageTranslation = scrollVal.interpolate({
    inputRange: [0, 390, 780],
    outputRange: [1, 2, 3],
    extrapolateLeft: "clamp",
  });

  const initialPageRef = useRef(null);

  const initialPageValue = useRef(new Animated.Value(0)).current;

  // initialPageValue.setValue(5);

  // const animVal = new Animated.Value(0);

  // useEffect(() => {
  //   // Animated.event([{ nativeEvent: { contentOffset: { x: initialPage } } }], {
  //   //   useNativeDriver: true,
  //   // });
  //   // Animated.timing(animVal, {
  //   //   toValue: 390,
  //   //   // duration: 1000,
  //   //   useNativeDriver: true,
  //   // }).start();
  //   // animVal.setValue();
  //   // animVal.setValue(780);
  //   // initialPageRef.current.scrollTo({ x: 780 });
  //   // console.log("initialPageRef", initialPageRef);
  //   // initialPageRef.current.contentOffset({ x: 390 });

  //   console.log("initial page is", initialPage);
  //   initialPageValue.setValue(390 * initialPage);
  // }, [initialPage]);
  /*
  const FIXED_BAR_WIDTH = 280;
  const BAR_SPACE = 10;

  const numItems = images.length;
  const itemWidth = FIXED_BAR_WIDTH / numItems - (numItems - 1) * BAR_SPACE;

 



  // let indexAnim = useRef(new Animated.Value(1)).current;
  // console.log("indexAnim", indexAnim);

  let imageArray = [];
  let barArray = [];
  images.forEach((image, i) => {
    const thisImage = (
      <TouchableWithoutFeedback key={i} onPress={() => onPressImg(i)}>
        <Image
          key={`image${i}`}
          source={{ uri: image }}
          style={{ width: deviceWidth }}
        />
      </TouchableWithoutFeedback>
    );
    imageArray.push(thisImage);

    const scrollBarVal = animVal.interpolate({
      inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
      outputRange: [-itemWidth, itemWidth],
      extrapolate: "clamp",
    });

    const thisBar = (
      <View
        key={`bar${i}`}
        style={[
          styles.track,
          {
            width: itemWidth,
            marginLeft: i === 0 ? 0 : BAR_SPACE,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.bar,
            {
              width: itemWidth,
              transform: [{ translateX: scrollBarVal }],
            },
          ]}
        />
      </View>
    );
    barArray.push(thisBar);
  });

	*/

  // console.tron.display({
  //   name: "slider-debug",
  //   important: true,
  //   preview: "preview",
  //   value: {
  //     imageArray,
  //     barArray,
  //   },
  // });

  // const handleOnScroll = () => {
  //   // console.log("scrolleed triggered");
  //   Animated.event([{ nativeEvent: { contentOffset: { x: animVal } } }], {
  //     useNativeDriver: true,
  //   });
  // };

  const getImages = () => {
    const imageArray = images.map((image, i) => {
      return (
        <TouchableWithoutFeedback key={i} onPress={() => onPressImg(i + 1)}>
          <Image
            key={`image${i}`}
            source={{
              uri: image,
            }}
            style={{ width: deviceWidth, height: 200 }}
          />
        </TouchableWithoutFeedback>
      );
    });

    return imageArray;
  };

  // console.tron.display({
  //   name: "images123-debug",
  //   important: true,
  //   preview: "preview",
  //   value: getImages(),
  // });

  return (
    <>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        pagingEnabled
        disableIntervalMomentum={true}
        // contentOffset={{
        //   x: initialPageValue.interpolate({
        //     inputRange: [1, 2, 3],
        //     outputRange: [0, 360, 720],
        //     extrapolateLeft: "clamp",
        //   }),
        // }}
        // contentOffset={{ x: initialPageValue.Value() }}
        // contentOffset={{ x: 780 }}
        contentOffset={{ x: (initialPage - 1) * 390 }}
        onScroll={
          // (e) => {
          //   console.log("scrolled...");
          // }
          Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollVal } } }],
            // { listener: (event) => console.log(event) },
            {
              useNativeDriver: true,
            }
          )
        }
        onMomentumScrollEnd={(event) => {
          console.log("dfdfd", initialPageValue);
          console.log("deviceWidth", deviceWidth);
          console.log(event.nativeEvent.contentOffset.x);

          const activeIndex =
            event.nativeEvent.contentOffset.x / deviceWidth + 1;

          // indexAnim = activeIndex;

          getCaroselIndex(activeIndex);
        }}
        ref={initialPageRef}
        // ref={(ref, initialPageRef) => {
        //   initialPageRef = ref;
        // }}
        // ref={(ref) => {
        //   const myScroll = ref;
        //   myScroll.scrollTo({ x: 390, y: 0, animated: true });
        // }}
      >
        {getImages()}
        {/* <Image
          key={`image`}
          source={{
            uri: "https://images.unsplash.com/photo-1586920740199-47ce35183cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4031&q=80",
          }}
          style={{ width: deviceWidth, height: 200 }}
        />
        <Image
          key={`image1`}
          source={{
            uri: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
          }}
          style={{ width: deviceWidth, height: 200 }}
        /> */}
      </Animated.ScrollView>
      {/* <View style={styles.barContainer}>{barArray}</View> */}
    </>
  );
};

CarouselSlider.defaultProps = {
  images: [],
};

export default CarouselSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
