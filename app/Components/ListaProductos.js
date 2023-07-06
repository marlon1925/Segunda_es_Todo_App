import { FlatList, ScrollView, TouchableHighlight, StyleSheet, View } from "react-native";
import { Card, Button, Text } from 'react-native-paper';
export const ListaProducto = (props) => {








    let ItemProduct = ({ prod, indice }) => {

        return (
           <View>
            
           </View>
        );
    }








    return <FlatList
        data={props.productos}
        renderItem={(e) => {

            return (
                <View style={styles.container}>
                    <ScrollView >
                        <ItemProduct
                            indice={e.index}
                            prod={e.item}
                        />
                    </ ScrollView >

                </View>


            )
        }}
        keyExtractor={(item) => { return item.id }}

    />


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffff',
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