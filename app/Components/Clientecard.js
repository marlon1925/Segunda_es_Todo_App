import { FlatList, ScrollView, TouchableHighlight, StyleSheet, View } from "react-native";
import { Card, Button, Text } from 'react-native-paper';
import { EliminarCliente } from "../Services/ClienteSrv";
import { Eliminar } from "../Services/AutenticacionSrv";
export const TarjetaCliente = (props) => {

   const elim = async () => {

        await Eliminar();

    }
    let ItemClient = ({ prod, indice }) => {
        return (
            <TouchableHighlight onPress={() => {
                console.log("entre")
            }}
              
            >
                <Card>

                    <Card.Title title={prod.name} subtitle={prod.cedula} />
                    <Card.Content>
                        {/* <Text variant="titleLarge">{prod.title}</Text> */}
                        <Text variant="bodyMedium">{prod.correo}</Text>
                    </Card.Content>

                </Card>
            </TouchableHighlight>

        );
    }








    return <FlatList
        data={props.clientes}
        renderItem={(e) => {

            return (
                <View style={styles.container}>
                    <ScrollView >
                        <ItemClient
                            indice={e.index}
                            prod={e.item}
                        />
                    </ ScrollView >

                </View>


            )
        }}
        keyExtractor={(item) => { return item.identificacion }}

    />


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff1',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: "row",
        padding: 20,
        // backgroundColor: "gray"
    },
    caja: {
        backgroundColor: "red",
        borderWidth: 3,
        height: 100,
        width: 100,
        margin: 20
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    }
    ,
    text: {
        fontSize: 42,
    }
});