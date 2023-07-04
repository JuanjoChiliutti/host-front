import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import image from "../../assets/bg-desk.jpg";

export default function Landing() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <LinearGradient
          style={styles.container}
          colors={["transparent", "rgba(0,0,0,0.8)"]}
        >
          <StatusBar style="auto" />
          <View style={styles.field1}>
            <Text style={styles.title}>Bienvenido a Host</Text>
          </View>
          <View style={styles.field2}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.textBtn}>Ingresar</Text>
            </Pressable>

            <Text style={styles.text}>
              No tienes cuenta todavía? Registrate{" "}
              <Text
                style={{ color: "#ED0101" }}
                onPress={() => Linking.openURL("http://google.com")}
              >
                AQUI
              </Text>
            </Text>
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
  title: {
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    marginTop: 220,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    color: "red",
    backgroundColor: "#271fb8",
    width: 300,
    height: 58,
    justifyContent: "center",
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)", // Agrega la propiedad shadowColor para sombra en iOS
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  },
  textBtn: {
    textAlign: "center",
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    textAlign: "center",
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 40,
  },
  field1: {
    flexDirection: "column",
    flex: 5,
  },
  field2: {
    flex: 2,
    alignItems: "center",
  },
});
