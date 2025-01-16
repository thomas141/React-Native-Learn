//rnfes
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
//import React from "react";
import icedCoffeeImg from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text>Coffee Shop</Text>
        <Link href="/explore" style={styles.link} asChild>
          <Pressable>
            <Text style={styles.text}>Explore</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: "1",
    resizeMode: "cover", //resizeMode means how the image will fit the container
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
