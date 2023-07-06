import { useState } from "react";
import { FlatList, ScrollView, TouchableHighlight, StyleSheet, View } from "react-native";
import { Card, Button, Text } from 'react-native-paper';
export const TarjetaProducto = (props) => {



    
    const [Image, setImage1] = useState('')



    


    let ItemProduct = ({ prod, indice }) => {



        

        return (

            <TouchableHighlight onPress={() => {
                props.navegar.navigate("ModProdNav",{titulo:prod.title,precio:prod.price,categoria:prod.Category,id:prod.id,peso:prod.weigth,url:prod.url})
            }}>
                <Card>
                   
                   {prod.url ?  <Card.Cover source={{uri:prod.url}} /> : <Card.Cover source={{ uri:"https://img.freepik.com/psd-premium/maqueta-botella-agua-dulce_358694-279.jpg?w=2000" }} />}
                    <Card.Title title={prod.title} subtitle={prod.price} />
                    <Card.Content>
                        {/* <Text variant="titleLarge">{prod.title}</Text> */}
                        <Text variant="bodyMedium">{prod.Category}</Text>
                    </Card.Content>

                </Card>
            </TouchableHighlight>

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
        // backgroundColor: '#fff1',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: "row",
        padding: 20,
        // backgroundColor: "gray"
    },
    caja: {
        // backgroundColor: "red",
        borderWidth: 3,
        height: 100,
        width: 100,
        margin: 20
    },
    scrollView: {
        // backgroundColor: 'pink',
        marginHorizontal: 20,
    }
    ,
    text: {
        fontSize: 42,
    }
});