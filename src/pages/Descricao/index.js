import { useRoute } from "@react-navigation/native";
import { Text, StyleSheet, Button,Platform, View,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Descricao() {
   
    const route = useRoute();
    const { cursoInfo } = route.params;
  
    return (
      <SafeAreaView style={styles.container}>
        <Text>{cursoInfo.Curso}</Text>
        <Text>{cursoInfo.Descricao}</Text>
        <Image source={cursoInfo.Imagem} style={{width:300,height:300}}/>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
},
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
