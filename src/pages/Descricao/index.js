import { useRoute } from "@react-navigation/native";
import { Text, StyleSheet, Button, Platform, View, Image, ScrollView, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Descricao() {

  const route = useRoute();
  const { cursoInfo } = route.params;

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView >

        <View style={styles.curso}>
          <Text style={{ fontWeight: "bold", fontSize:15 }}>{cursoInfo.Curso}</Text>
        </View>
        <View style={styles.descricao}>
          <Text style={{ textAlign: "center", }}>{cursoInfo.Descricao}</Text>
        </View>
        <Image source={cursoInfo.Imagem} style={styles.image} />
       
        <ScrollView horizontal={true}>
          <View style={{ width: 600, height: 200, justifyContent: "flex-end", }}>{cursoInfo.renderTable()}</View>
        </ScrollView>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Inscreva-se</Text>
        </TouchableOpacity>




      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: "center",
    height: "100%",
},
  image: {
    position: "absolute",
    top: 0,
    right: 130,
    width: 100,
    height: 60,
    marginBottom: 10,
  },
  curso: {
    height: 70,
    width: 250,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginLeft:120,
    

  },
  descricao: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: 400,
    padding: 35,
    marginLeft:100,
    gap: 10,
  },
  button: {
    marginTop: 50,
    backgroundColor: 'red',
    paddingVertical: 15,
    width: 250, 
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


