import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import image from "../../../assets/bg-desk.jpg";

export default function Logout() {
  const navigation = useNavigation();

  const logout = () => {
    AsyncStorage.removeItem("token").then(() => {
      navigation.navigate("Login");
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <LinearGradient
          style={styles.container}
          colors={["transparent", "rgba(0,0,0,1)"]}
        >
          <View style={styles.loginSecction}>
            <Text style={styles.textBtn}>¿Seguro que deseas salir de tu cuenta?</Text>
            <Pressable style={styles.btn} onPress={() => logout()}>
              <Text style={styles.textBtn}>Confirmar</Text>
            </Pressable>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  loginSecction: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    textAlign: "center",
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 18,
  },
  btn: {
    color: "red",
    backgroundColor: "#271fb8",
    width: 300,
    height: 58,
    justifyContent: "center",
    marginTop: 90,
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)", // Agrega la propiedad shadowColor para sombra en iOS
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  },
});
