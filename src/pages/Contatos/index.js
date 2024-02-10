import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, TextInput, Alert, View,StyleSheet, Platform} from 'react-native'

export default function Home() {
    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
            <Text style={{fontSize:24,}}>CADASTRO</Text>

            <View style={styles.input1}>
            <View><TextInput style={styles.input} placeholder="Nome"></TextInput></View>
            <View><TextInput style={styles.input} placeholder="CPF" keyboardType="numeric"></TextInput></View>
            <View><TextInput style={styles.input}placeholder="Data Nascimento" keyboardType="numeric"></TextInput></View>
            </View>
           
            <View style={{width:250}}>
                <Button title="Enviar" color={'red'}
                    onPress={() => Alert.alert('CADASTRO REALIZADO')}></Button>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap:30,
    
    },

    input:{
        width: 250,
        height: 40,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: "#ffff",

    },

    input1:{
        gap:20.
    }
    
  });