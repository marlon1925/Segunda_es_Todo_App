import { View, Text, Alert, StyleSheet, FlatList } from "react-native"
import { Input, Button, Icon } from '@rneui/base';
import { useState } from "react";
import { cerrarSesion } from "../../Services/AutenticacionSrv";
import { ResetContraseña } from "../../Services/AutenticacionSrv";
import { TextInput } from 'react-native-paper';
import { Image } from '@rneui/themed';
import theme from "../../theme/theme";


export const ReseteoForm = ({ navigation }) => {

    const [correo, setCorreo] = useState();

    const Reseteo = () => {
        //Alert.alert("Vlaidando")
        ResetContraseña(correo);
        navigation.goBack();
    }

    return <View style={styles.container}>
        <View style={styles.cajaCabecera} >
        <Image source={require('../../../assets/HermesLogo.jpg')} style={{ width: 400, height: 160 }} />

            {/* <Text>Login Sistema </Text> */}
        </View>
        <View style={styles.cajaCuerpo} >
            <TextInput
                value={correo}
                label='Mail'
                onChangeText={setCorreo}
                KeyboardType="email-address"
                mode="outlined"
                lefIcon={
                    <Icon
                        name="user"
                        size={24}
                        color='black'
                        type='ant-design'
                    />

                }

            />
        </View>
        <View style={styles.cajaBotones}>
            <Button
                title='Resetear Contraseña'
                onPress={Reseteo}
                buttonStyle={{ borderRadius: 10, backgroundColor: theme.colors.jade }}
                containerStyle={{
                    width: 200,
                    paddingTop: 40
                }}

            />

        </View>
    </View>
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        //alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    cajaCabecera: {
        //backgroundColor: 'cyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 100,
        marginBottom: 50
    },
    cajaCuerpo: {
        //backgroundColor: 'brown',
        flex: 6,
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
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 2
    },
    txtinput: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: 'gray',
        width: 310,
        height: 50
    },
    label: {
        zIndex: 100,
        position: 'absolute',
        backgroundColor: 'white',
        top: -11,
        left: 10,
        marginLeft: 11,
    }

});