import { Image } from "@rneui/base";
import { useContext, useEffect, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { Keyboard, View, StyleSheet } from "react-native";
import theme from "../theme/theme";
import Constants from "expo-constants";
import Icons from "./Icons";
import { useNavigation } from "@react-navigation/native";
import StyledText from "./StyledText";
// import ModernaContext from "../context/ModernaContext/ModernaContext";
import Logotipo from "../../assets/Logo.png";

export default function Header({ back, scale = 1, hide = true, style }) {
  // const [isKeyboardVisible, setKeyboardVisible] = useState(false);
 

  const navigation = useNavigation();
  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     "keyboardDidShow",
  //     () => {
  //       setKeyboardVisible(true); // or some other action
  //     }
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     "keyboardDidHide",
  //     () => {
  //       setKeyboardVisible(false); // or some other action
  //     }
  //   );

  //   return () => {
  //     keyboardDidHideListener.remove();
  //     keyboardDidShowListener.remove();
  //   };
  // }, []);

  return (
    <View style={[styles.statusbar]}>
      {back && (
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack("ClientesStack2")}>
            <Icons
              color={theme.colors.morado}
              style={styles.button}
              size={40}
              back
            />
          </TouchableOpacity>
        </View>
      )}
      <View
        style={[styles.container, style]}
      >
        <Image
          style={[
            styles.logo,
            {
              height: 100 * scale,
              width: Dimensions.get("window").width ,
            },
          ]}
          source={Logotipo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hide: {
    display: "none",
  },
  statusbar: {
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -10,
  },
  logo: {
    marginVertical: 20,
    resizeMode: "center",
  },
  back: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 99,
  },
});
