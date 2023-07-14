import React, { useState } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Checkbox from 'expo-checkbox';



export default function Home() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de cosas a realizar</Text>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={checkboxes.checkbox1}
          onValueChange={() => handleCheckboxChange('checkbox1')}
        />
        <View style={styles.additionalContent}>
          <Text style={styles.paragraph}>Limpiar el espacio de trabajo</Text>
          {!checkboxes.checkbox1 && <Text style={styles.comment}>El espacio de trabajo deber estar siempre limpio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error nisi atque ullam, laboriosam adipisci iste dolor facilis provident optio dicta dolores id, corrupti quod ut deserunt veritatis voluptatem cupiditate.</Text>}
        </View>
        
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={checkboxes.checkbox2}
          onValueChange={() => handleCheckboxChange('checkbox2')}
        />
        <View style={styles.additionalContent}>
          <Text style={styles.paragraph}>Cargar el matafuego</Text>
          {!checkboxes.checkbox2 && <Text style={styles.comment}>El matafuego debe estar cargado hasta la manija Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui unde pariatur, atque voluptates ducimus nemo molestias esse quo magnam quisquam eligendi vitae commodi, culpa nulla molestiae laudantium odio? Deserunt, facilis!</Text>}
        </View>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={checkboxes.checkbox3}
          onValueChange={() => handleCheckboxChange('checkbox3')}
        />
        <View style={styles.additionalContent}>
          <Text style={styles.paragraph}>Usar barbijo</Text>
          {!checkboxes.checkbox3 && <Text style={styles.comment}>El barbijo va siempre puesto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde quas illo dicta modi sit nemo provident? Atque optio, consequatur amet quis illo saepe, facere, nam impedit obcaecati nobis neque!</Text>}
        </View>
      </View>
    </View>
  );
}    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  title: {
    fontSize: 18,
    marginVertical: 16
  },
  additionalContent: {
    width: '90%'
  },
  comment: {
    color: 'rgb(180, 180, 180)',
    backgroundColor: 'rgb(20,20,20)',
    width: '100%'
  },
  
});

