import { FlatList, ScrollView, TouchableHighlight, StyleSheet, View, Text } from "react-native";

export const TarjetaPedidosProcesados = (props) => {







    let ItemProduct = ({ prod, indice }) => {

        return (

            <ScrollView style={styles.impar} >
                <TouchableHighlight onPress={() => {
                    console.log("prod----------------------------------", prod.id)
                    props.navegar.navigate('StackDetalleNopProcesado', { id: prod.id })
                }}>
                    <View style={{ margin: 10 }}>
                        <View style={styles.ViewRow}>
                            <Text>PEDIDO #</Text>
                            <Text>{prod.id}</Text>
                        </View>

                    </View>


                </TouchableHighlight>

            </ScrollView  >

        );
    }








    return <FlatList
        data={props.pedidos}
        renderItem={(e) => {

            return <ItemProduct
                indice={e.index}
                prod={e.item}
            />
        }}
        keyExtractor={(item) => { return item.id }}

    />


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    impar: {
        alignContent: "center",
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        width: "90%",
        // backgroundColor: '#E09726',
        borderRadius: 5,
        borderWidth: 2




    },
    ViewRow: {
        flexDirection: "row"
    }


    ,
    titulo: {
        fontSize: 30,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#F03E0A',
        letterSpacing: 3


    },
    Inputs: {
        borderBottomColor: "#82B5FA",
        borderBottomWidth: 2,
        borderBottomLeftRadius: 3.7,
        borderBottomRightRadius: 3.7,
        backgroundColor: "#B3DDF2",
        margin: 20,
        marginTop: 2,
        marginLeft: 1,
        shadowColor: "#0000",
        shadowRadius: 100
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonS: {
        borderRadius: 20,
        padding: 30,
        paddingHorizontal: 40,
        backgroundColor: "#6B7FE3",
        margin: 10
    },
    buttonP: {
        borderRadius: 20,
        padding: 30,
        paddingHorizontal: 40,
        backgroundColor: "#82B5FA",
        margin: 10
    },
    cajaCabecera: {
        //backgroundColor: 'cyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 50
    },
    cajaCuerpo: {
        // backgroundColor: 'brown',
        flex: 5,
        alignItems: 'stretch',
        paddingHorizontal: 30,
        justifyContent: 'flex-start',
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 39
    },
    cajaBotones: {
        //backgroundColor: 'red',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    }

});
