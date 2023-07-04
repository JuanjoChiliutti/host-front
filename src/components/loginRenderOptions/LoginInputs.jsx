import React, {useState} from "react";

import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginInputs() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    const sendCred = async () => {
    
      fetch('http://10.0.2.2:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      })
      
      .then(res => res.json())
      .then(async (data) => {
        try {
          await AsyncStorage.setItem('token', data.token)
          navigation.navigate("TabNavigation")
        } catch (error) {
          console.log(error)
        }
      })
    }

  return (
    <View>
      <View style={styles.cont1}>
        <Text style={styles.welcomeText}>¡Bienvenido!</Text>
        <Text style={styles.subText}>
          {" "}
          Debes loguearte
        </Text>
      </View>
      <View style={styles.cont2}>
        <TextInput
          name="Email"
          style={styles.inputEmail}
          placeholderTextColor={"#A6A4A4"}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          name="Password"
          style={styles.inputPassword}
          placeholderTextColor={"#A6A4A4"}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>
      <View style={styles.cont3}>
        <Pressable
          style={styles.btn2}
          onPress={() => {
            sendCred()
          }}
        >
          <Text style={styles.textBtn}>Ingresar</Text>
        </Pressable>

        <Text style={styles.text}>
          Olvidaste la contraseña? {"\n"}Ingresa{" "}
          <Text
            style={{ color: "#ED0101" }}
            onPress={() => navigation.navigate("Landing")}
          >
            AQUI
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
 
  title: {
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    marginTop: 190,
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
  btn2: {
    backgroundColor: "#271fb8",
    width: "90%",
    height: "30%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
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
});
