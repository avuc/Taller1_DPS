/**
* @format
* @flow strict-local
*/
import React, {useState, useEffect} from 'react';
import {
 SafeAreaView,
 StyleSheet,
 View,
 Text,
 StatusBar,
} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import colors from './src/utils/colors';


export default function App(){
  const [plato, setPlato] = useState(null);
  const [extra, setExtra] = useState(null);
  const [pago, setPago] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [total, setTotal] = useState(null);


const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
 if (plato && extra && pago && cantidad) calculate();
 else reset();
 }, [plato, extra, pago, cantidad]);
 const calculate = () => {
 reset();
if (!plato) {
 setErrorMessage('Seleccione opción de plato, ¡Llenar datos!.');
 } else if (!extra) {
 setErrorMessage('Seleccione opción de extra, ¡Llenar datos!.');
 } else if (!pago) {
 setErrorMessage('Seleccione la forma de pago que desee, ¡Llenar datos!.');
 } else if (!cantidad) {
 setErrorMessage('Ingrese la cantidad, ¡Llenar datos!.');
 } 
 else {

 const total = (cantidad * plato) + (cantidad * extra);
 const descuento = (total * (pago/100));

 setTotal({
 totalFinal: (total - descuento).toFixed(2).replace('.', ','),
 });
 }

 };
 const reset = () => {
 setErrorMessage('');
 setTotal(null);
 };

return (
 <>
 <StatusBar barStyle="light-content" />
 <SafeAreaView style={styles.safeArea}>
 <View style={styles.background} />
 <Text style={styles.titleApp}>CaféBosco App</Text>
 <Form
 setPlato={setPlato}
 setExtra={setExtra}
 setPago={setPago}
 setCantidad={setCantidad}
 />
 </SafeAreaView>
 <Result
 plato={plato}
 extra={extra}
 pago={pago}
 cantidad={cantidad}
 total={total}
 errorMessage={errorMessage}
 />
 <Footer calculate={calculate} />
 </>
 );
}

const styles = StyleSheet.create({
 safeArea: {
 height: 290,
 alignItems: 'center',
 },
 background: {
 backgroundColor: colors.PRIMARY_COLOR,
 height: 310,
 width: '100%',
 borderBottomLeftRadius: 40,
 borderBottomRightRadius: 40,
 position: 'absolute',
 zIndex: -1,
 },
 titleApp: {
 fontSize: 30,
 fontWeight: 'bold',
 color: '#FFF',
 marginTop: 40,
 },
});