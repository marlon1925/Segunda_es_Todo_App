import { async } from '@firebase/util';
import { collection, doc, getDocs, setDoc, addDoc } from 'firebase/firestore'

export const consultarPedidosGenerales = async (fnsetPedidos) => {
    //console.log("globla",global.dbCon);
    //const productoRef = collection(global.dbCon, "Pedidos");
    const SnapPedidos = await getDocs(collection(global.dbCon, "Pedidos"));
    let PedidoArray = []
    SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());

        console.log("doce", documento.data());
        PedidoArray.push(documento.data());
    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc", PedidoArray);

}

export const recuperarProductosAdmin = async (fnSeProductos) => {

    const SnapProductos = await getDocs(collection(global.dbCon, "Producto"));
    let arrayProductos = []
    console.log("-----------------------------------------")
    SnapProductos.forEach((documento) => {
        console.log("doc", documento.data());

        console.log("doce", documento.data());
        arrayProductos.push(documento.data());
    });
    //console.log(SnapProductos)


    fnSeProductos(arrayProductos)
    console.log("arrayProductos:", arrayProductos);

}