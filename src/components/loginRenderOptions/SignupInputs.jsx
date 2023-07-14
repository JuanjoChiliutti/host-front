import React, {useState} from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


export default function SignupInputs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cuit, setCuit] = useState('')

    const navigation = useNavigation();

    const sendCred = async () => {
    
      fetch('http://10.0.2.2:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name, 
          'email': email,
          'cuit': cuit,
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
          Introduce tus datos
        </Text>
      </View>
      <View style={styles.cont2}>
        <TextInput
          name="Name"
          value={name}
          style={styles.inputEmail}
          placeholderTextColor={"#A6A4A4"}
          placeholder="Nombre"
          onChangeText={(text)=>setName(text)}
        ></TextInput>
        <TextInput
          name="Cuit"
          value={cuit}
          style={styles.inputEmail}
          placeholderTextColor={"#A6A4A4"}
          placeholder="CUIT de tu empresa"
          onChangeText={(text)=>setCuit(text)}
          >
        </TextInput>
        <TextInput
          name="Email"
          value={email}
          style={styles.inputEmail}
          placeholderTextColor={"#A6A4A4"}
          placeholder="Email"
          onChangeText={(text)=>setEmail(text)}
        ></TextInput>
        <TextInput
          name="Password"
          value = {password}
          style={styles.inputPassword}
          placeholderTextColor={"#A6A4A4"}
          secureTextEntry={true}
          placeholder="Contraseña"
          onChangeText={(text)=>setPassword(text)}
        ></TextInput>
        <TextInput
          name="Confirm-Password"
          style={styles.inputPassword}
          placeholderTextColor={"#A6A4A4"}
          secureTextEntry={true}
          placeholder="Confirma tu contraseña"
        ></TextInput>
      </View>
      <View style={styles.cont3}>
        <Pressable
          style={styles.btn2}
          onPress={() => {
            sendCred()
          }}
        >
          <Text style={styles.textBtn}>Registrar</Text>
        </Pressable>

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
    height: "20%",
    width: "80%",
    borderBottomWidth: 1,
    alignSelf: "center",
    marginTop: 15,
    borderBottomColor: "#A6A4A4",
    fontSize: 17,
  },
  inputPassword: {
    height: "20%",
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#A6A4A4",
    alignSelf: "center",
    marginTop: 15,
    fontSize: 17,
  },
  btn2: {
    backgroundColor: "#271fb8",
    width: "90%",
    height: "40%",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 70,
    marginTop: 50,
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
    marginBottom: 20,
  },
  cont2: {
    flex: 3,
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "82%",
    alignSelf: "center",
    marginBottom: 15,
  },
  cont3: {
    flex: 3,
  },
})