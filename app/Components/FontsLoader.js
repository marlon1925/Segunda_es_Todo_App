import { useFonts } from "expo-font";
import {
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";
import { Itim_400Regular } from "@expo-google-fonts/itim";

const fonts = {
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
};

export const FontsLoader = ({ children }) => {
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });
 
  if (!fontsLoaded) {
    // Fuentes no cargadas, mostrar componente de carga
    return null;
  } else {
    // Fuentes cargadas, renderizar el contenido
    return <>{children}</>;
  }
};
