import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Noticias() {
  return (
    <View style={styles.noticias}>
      <Text>Charlas de 5 min</Text>
      <Text>Novedades</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  noticias: {
    marginVertical: 30,
    marginHorizontal: 15
  }
})