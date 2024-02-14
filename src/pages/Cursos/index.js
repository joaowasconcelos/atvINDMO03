import { Text, Button, View, StyleSheet, ScrollView, Platform, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Cursos() {
    const navigation = useNavigation()

    function cursoAdm() {
        const adm = {
            Curso: "TÉCNICO EM ADMINISTRAÇÃO",
            Descricao: "O curso técnico de Administração tem por objetivo habilitar profissionais em realizar e gerir processos administrativos das áreas da indústria e de serviços, utilizando-se de técnicas e tecnologias apropriadas e de padrões éticos, legais, de qualidade e segurança, com responsabilidade social e ambiental.",
            Imagem: require("../../assets/tec.png"),
            renderTable: renderTable
        };

        function renderTable() {
            return (
                <View style={styles.tableContainer}>
                    {/* Cabeçalho da tabela */}
                    <View style={[styles.row, styles.header]}>
                        <Text style={styles.cell}>Local</Text>
                        <Text style={styles.cell}>Duração</Text>
                        <Text style={styles.cell}>Horário</Text>
                        <Text style={styles.cell}>Valor Total</Text>
                        <Text style={styles.cell}>Vagas</Text>
                    </View>
                    {/* Linhas da tabela */}
                    <View style={styles.row}>
                        <Text style={styles.cell}>Sumaré</Text>
                        <Text style={styles.cell}>Inicio: 17/06/2024 Término: 12/12/2026</Text>
                        <Text style={styles.cell}>18:45 às 22:00 </Text>
                        <Text style={styles.cell}>R$ 2.500,00 </Text>
                        <Text style={styles.cell}>20</Text>
                    </View>


                </View>
            );
        };
        navigation.navigate("Descricao", { cursoInfo: adm });

    }

    function cursoEletro() {
        const eletro = {
            Curso: "TÉCNICO EM ELETROMECANICA",
            Descricao: "O curso técnico de Eletromecânica tem por objetivo habilitar profissionais no planejamento, no controle e na realização de atividades relativas à manutenção eletromecânica, em conformidade às normas técnicas, ambientais, de qualidade e de segurança e saúde no trabalho.",
            Imagem: require("../../assets/eletro.jpg"),
            renderTable: renderTableInfo

        };
        function renderTableInfo() {
            return (
                <View style={styles.tableContainer}>
                    {/* Cabeçalho da tabela */}
                    <View style={[styles.row, styles.header]}>
                        <Text style={styles.cell}>Local</Text>
                        <Text style={styles.cell}>Duração</Text>
                        <Text style={styles.cell}>Horário</Text>
                        <Text style={styles.cell}>Valor Total</Text>
                        <Text style={styles.cell}>Vagas</Text>
                    </View>
                    {/* Linhas da tabela */}
                    <View style={styles.row}>
                        <Text style={styles.cell}>Sumaré</Text>
                        <Text style={styles.cell}>Inicio: 20/02/2024 Término: 20/02/2025</Text>
                        <Text style={styles.cell}>18:45 às 22:00 </Text>
                        <Text style={styles.cell}>R$ 4.500,00 </Text>
                        <Text style={styles.cell}>10</Text>
                    </View>

                </View>
            );
        };
        navigation.navigate("Descricao", { cursoInfo: eletro });
    }

    function cursoAds() {
        const ads = {
            Curso: "TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS",
            Descricao: "O Curso Técnico de Desenvolvimento de Sistemas tem por objetivo habilitar profissionais para analisar requisitos funcionais e não funcionais de produtos, desenvolver e testar sistemas de software, de acordo com as especificações do projeto, considerando as boas práticas do mercado de tecnologia da informação e as necessidades do usuário..",
            renderTable: renderTableAds,
            Imagem: require("../../assets/ads.jpg"),
        };

        function renderTableAds() {
            return (
                <View style={styles.tableContainer}>
                    {/* Cabeçalho da tabela */}
                    <View style={[styles.row, styles.header]}>
                        <Text style={styles.cell}>Local</Text>
                        <Text style={styles.cell}>Duração</Text>
                        <Text style={styles.cell}>Horário</Text>
                        <Text style={styles.cell}>Valor Total</Text>
                        <Text style={styles.cell}>Vagas</Text>
                    </View>
                    {/* Linhas da tabela */}
                    <View style={styles.row}>
                        <Text style={styles.cell}>Sumaré</Text>
                        <Text style={styles.cell}>Inicio: 20/02/2024 Término: 20/02/2025</Text>
                        <Text style={styles.cell}>09:00 às 15:00 </Text>
                        <Text style={styles.cell}>R$ 14.500,00 </Text>
                        <Text style={styles.cell}>05</Text>
                    </View>

                </View>
            );
        };
        navigation.navigate("Descricao", { cursoInfo: ads });
    }

    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
            <ScrollView>
                <View style={{ gap: 20, }}>

                    <View style={styles.teste}>
                        <Text style={styles.container1} onPress={cursoAdm}>TÉCNICO EM ADMINISTRAÇÃO</Text>
                    </View>

                    <View style={styles.teste}>
                        <Text style={styles.container1} onPress={cursoEletro}>TÉCNICO EM ELETROMECÂNICA</Text>
                    </View>


                    <View style={styles.teste}>
                        <Text style={styles.container1} onPress={cursoAds}>TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },

    container1: {
        margin: 10,
        textAlign: "center",
        color: "red",
        fontWeight: "bold",

    },
    Text: {
        height: 150,
        width: 350,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        paddingHorizontal:2,
        paddingVertical: 10,

    },
    header: {
        backgroundColor: '#f2f2f2',

    },
    cell: {
        flex: 1,
        fontSize: 16,

    },
})


