import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil() {
  return (
    <View style={styles.perfil}>
      <View style={styles.datospersonales}>
        {/* aqui van los datos personales del usuario traidos de la DB. */}
      </View>
      <Text>Emergencias</Text>
      <Text>Servicio Médico</Text>
      <Text>IPER</Text>
      <Text>Sugerencias</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  perfil: {
    marginVertical:30,
    marginHorizontal: 15
  }
})