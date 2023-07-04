import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import image from "../../assets/bg-desk.jpg";
import LoginInputs from "../components/loginRenderOptions/LoginInputs";
import SignupInputs from "../components/loginRenderOptions/SignupInputs";

export default function Login() {

  const [active, setActive] = useState(true);
  const navigation = useNavigation();

  const detectLogin = async ()=>{
    const token = await AsyncStorage.getItem('token');
    if (token) {
      navigation.navigate('TabNavigation');
    }else{
      navigation.navigate('Login');
    }
  }

  useEffect(() => {
    detectLogin()
  }, []);
  
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <LinearGradient
        style={styles.container}
        colors={["transparent", "rgba(0,0,0,0.8)"]}
      >
        <KeyboardAwareScrollView style={styles.container}>
          <View style={styles.container}>
            <View style={styles.field1}>
              <Text style={styles.title}>HOST</Text>
            </View>

            <View style={styles.loginSecction}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setActive(!active);
                }}
                style={styles.switchBtn}
              >
                <View style={styles.switchBtn}>
                  <View style={active ? styles.btnLogin : styles.btnSignup}>
                    <Text style={styles.btnLoginTxt}>Log in</Text>
                  </View>
                  <View style={active ? styles.btnSignup : styles.btnLogin}>
                    <Text style={styles.btnSignupTxt}>Sign Up</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

          {
            active ?   <LoginInputs /> : <SignupInputs />
          }
              
            </View>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    marginTop: 190,
  },
  field1: {
    flexDirection: "column",
    flex: 1,
  },
  inputEmail: {
    height: "30%",
    width: "80%",
    borderBottomWidth: 1,
    alignSelf: "center",
    marginBottom: "5%",
    marginTop: 30,
    borderBottomColor: "#A6A4A4",
    fontSize: 17,
  },
  inputPassword: {
    height: "30%",
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#A6A4A4",
    alignSelf: "center",
    marginTop: 10,
    fontSize: 17,
  },
  loginSecction: {
    flex: 3,
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    width: "82%",
    height: "90%",
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 50,
  },

  btn2: {
    backgroundColor: "#25C90A",
    width: "90%",
    height: "30%",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)", // Agrega la propiedad shadowColor para sombra en iOS
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.8,
  shadowRadius: 2,
    alignSelf: "center",
    marginTop: 40,
  },
  textBtn: {
    textAlign: "center",
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: "5%",
    marginBottom: 50,
  },
  welcomeText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
  },
  subText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "center",
  },
  switchBtn: {
    flex: 1,
    width: "90%",
    height: "13%",
    backgroundColor: "#CCCCCC",
    borderRadius: 40,
    marginTop: "7%",
    marginLeft: "5%",
    marginBottom: "7%",
    flexDirection: "row",
  },
  cont1: {
    flex: 1,
  },
  cont2: {
    flex: 3,
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "82%",
    alignSelf: "center",
  },
  cont3: {
    flex: 3,
  },
  btnLogin: {
    flex: 2,
    backgroundColor: "#271fb8",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    height: 50,
  },

  btnSignup: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnLoginTxt: {
    marginLeft: "5%",
    fontWeight: "bold",
    fontSize: 18,
    color: "#FDFDFD",
  },
  btnSignupTxt: {
    marginLeft: "5%",
    fontWeight: "bold",
    fontSize: 18,
    color: "#FDFDFD",
  },
});
