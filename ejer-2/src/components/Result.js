import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const perso = {
  tipo_plato:'',
}
const persoo = {
  tipo_extra:'',
}
const persooo = {
  froma_pago:''
}

export default function Result(props) {
const {plato, extra, pago, cantidad, total, result, errorMessage} = props;
   const var1 = 'Plato del dia';
   const var2 = 'Sopa del dia';
   const var3 = 'Platillo especial';
    const var4 = 'tortilla';
   const var5 = 'Bebida';
   const var6 = 'Queso fresco';
   const var7 = 'Platillo del dia';
    const var8 = 'Efectivo';
   const var9 = 'Targeta de credito';
  
   if(plato==1)
   {
     perso.tipo_plato = var1;
   }
     
   else{
     
     if(plato==1.5)
   {
     perso.tipo_plato = var2;
   }
   else{
      if(plato==2)
   {
     perso.tipo_plato = var3;
   }
   else{

   }
   }
   }



    if(extra==0.5)
   {
     persoo.tipo_extra = var4;
   }
     
   else{
     
     if(extra==1.5)
   {
     persoo.tipo_extra = var5;
   }
   else{
      if(extra==1)
   {
     persoo.tipo_extra = var6;
   }
   else{
     if(extra==2)
   {
     persoo.tipo_extra = var7;
   }
   else{

   }

   }
   }
   }

   if(pago==15)
   {
     persooo.froma_pago = var8;
   }
     
   else{
     
     if(pago==5)
   {
       persooo.froma_pago = var9;
   }
   else{
      
   }
   }
 return (
   
 <View style={styles.content}>
 {total && (
   <View style={styles.boxResult}>
 <Text style={styles.title}>RESUMEN</Text>
 <DataResult title="Cantidad:" value={`${cantidad}`} />
 <DataResult title="Tipo de plato:" value={perso.tipo_plato} />
 <DataResult title="Tipo de extra:" value={persoo.tipo_extra} />
 <DataResult title="Tipo de pago:" value={persooo.froma_pago} />
 <DataResult title="Descuento (%)" value={`${pago} %`} />
 <DataResult
 title="Total a pagar:"
 value={`$ ${total.totalFinal}`}
 />
 </View>
 )}
 <View>
 <Text style={styles.error}>{errorMessage}</Text>
 </View>
 </View>
 );
}
function DataResult(props) {
 const {title, value} = props;
 return (
 <View style={styles.value}>
 <Text>{title}</Text>
 <Text>{value}</Text>
 </View>

 );
}
const styles = StyleSheet.create({
 content: {
 marginHorizontal: 40,
 },
 boxResult: {
 padding: 30,
 },
 title: {
 fontSize: 25,
 textAlign: 'center',
 fontWeight: 'bold',
 marginBottom: 20,
 },
 value: {
 flexDirection: 'row',
 justifyContent: 'space-between',
 marginBottom: 20,
 },
 error: {
 marginVertical: 60,
 textAlign: 'center',
 color: '#f00',
 fontWeight: 'bold',
 fontSize: 20,
 },
});