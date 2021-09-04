import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';
export default function Form(props) {
 const {setPlato, setExtra, setPago, setCantidad} = props;
 return (
 <View style={styles.viewForm}>
 <View style={styles.viewInputs}>

</View>

<RNPickerSelect
 style={picketSelectStyles}
 onValueChange={(value) => setPlato(value)}
 placeholder={{
 label: 'Tipo de plato...',
 value: null,
 }}
 items={[
 {label: 'Plato del día  $1.00', value: 1.00},
 {label: 'Sopa del día  $1.50', value: 1.50},
 {label: 'Platillo especial  $2.00', value: 2.00},
 ]}
 />

<RNPickerSelect
 style={picketSelectStyles}
 onValueChange={(value) => setExtra(value)}
 placeholder={{
 label: 'Precios extra...',
 value: null,
 }}
 items={[
 {label: 'Tortilla  $0.50', value: 0.50},
 {label: 'Bebida  $1.50', value: 1.50},
 {label: 'Queso fresco  $1.00', value: 1.00},
 {label: 'Postre del día  $2.00', value: 2.00},
 ]}
 />

<RNPickerSelect
 style={picketSelectStyles}
 onValueChange={(value) => setPago(value)}
 placeholder={{
 label: 'Forma de pago ',
 value: null,
 }}
 items={[
 {label: 'Efectivo', value: 15},
 {label: 'Tarjeta de crédito', value: 5},
 ]}
 />

 <TextInput
 placeholder="Cantidad"
 keyboardType="numeric"
 style={styles.input}
 onChange={(e) => setCantidad(e.nativeEvent.text)}
 />

 </View>
 
 );
}



const styles = StyleSheet.create({
 viewForm: {
 position: 'absolute',
 bottom: 0,
 width: '85%',
 paddingHorizontal: 50,
 backgroundColor: colors.PRIMARY_COLOR_DARK,
 borderRadius: 30,
 height: 180,
 justifyContent: 'center',
 },
 viewInputs: {
 flexDirection: 'row',
 },
 input: {
 height: 50,
 backgroundColor: '#fff',
 borderWidth: 1,
 borderColor: colors.PRIMARY_COLOR,
 borderRadius: 5,
 width: '60%',
 marginRight: 5,
 marginLeft: -20,
 marginTop: 10,
 marginBottom: 10,
 color: '#000',
 paddingHorizontal: 20,
 },
 inputPercentage: {
 width: '40%',
 marginLeft: 5,
 },
});
const picketSelectStyles = StyleSheet.create({
 inputIOS: {
 fontSize: 15,
 paddingVertical: 2,
 paddingHorizontal: 10,
 width: 250,
 height: 30,
 borderWidth: 0.5,
 borderColor: 'grey',
 borderRadius: 4,
 color: 'black',
 paddingRight: 30,
 backgroundColor: '#fff',
 marginTop: 2,
 marginBottom: 2,
 marginLeft: -20,
 },
 inputAndroid: {
 fontSize: 20,
 paddingHorizontal: 10,
 paddingVertical: 8,
 width: 250,
 height: 40,
 borderWidth: 0.5,
 borderColor: 'grey',
 borderRadius: 8,
 color: 'black',
 paddingRight: 30,
 marginLeft: -20,
 marginTop: 5,
 marginBottom: 5,
 backgroundColor: '#fff',
 },
inputWeb: {
 fontSize: 15,
 paddingHorizontal: 10,
 paddingVertical: 8,
 height: 40,
 width: 450,
 borderWidth: 0.5,
 borderColor: 'grey',
 borderRadius: 8,
 color: 'black',
 paddingRight: 30,
 marginTop: 2,
 marginBottom: 5,
 marginLeft: -20,
 backgroundColor: '#fff',
 alignContent: 'center',
 },

});