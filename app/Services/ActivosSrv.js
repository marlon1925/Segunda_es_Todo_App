

import { collection, doc, getDocs, setDoc, addDoc, getDoc, query, where } from 'firebase/firestore'

export const AddActive=(producto)=>{
    console.log(global.dbCon);
    const productRef = doc(global.dbCon, "Activos", producto.NActivo);
    setDoc(productRef, producto);

}

export const consultarUnActivo = async (id,fnsetObj) => {
    //console.log("globla",global.dbCon);
    const productoRef = doc(global.dbCon, "Activos",id);
    const docSnap = await getDoc(productoRef);
    console.log("dsfdsfdfdsfdsfds",docSnap.data());

    let PedidoObj = {}
    PedidoObj=docSnap.data();
    fnsetObj(PedidoObj);
    // console.log("productoFunc", PedidoObj);

}


export const consultarActivo = async (setId) => {
    //console.log("globla",global.dbCon);
    const productoRef = collection(global.dbCon, "Activos");
    const SnapProductos = await getDocs(productoRef);
    let ProductosArray = []
    SnapProductos.forEach((documento) => {
        console.log("doc", documento.data());
        ProductosArray.push(documento.data());

    });
    console.log("total dentro A-"+(ProductosArray.length+1))
    setId("A-"+(ProductosArray.length+1))

}

export const enviarPedidos = (pedido) => {
    const pedidoRef = doc(global.dbCon, "Pedidos", pedido.codigo);
    setDoc(pedidoRef, pedido);




}

export const CambiarProducto=(producto)=>{
    console.log(global.dbCon);
    const productRef = doc(global.dbCon, "Producto", producto.id);
    setDoc(productRef, producto);
}

export const AddProduct=(producto)=>{
    console.log(global.dbCon);
    const productRef = doc(global.dbCon, "Producto", producto.id);
    setDoc(productRef, producto);

}



export const consultarUnPedido = async (id,fnsetObj) => {
    //console.log("globla",global.dbCon);
    const productoRef = doc(global.dbCon, "Pedidos",id);
    const docSnap = await getDoc(productoRef);
    console.log("dsfdsfdfdsfdsfds",docSnap.data());

    let PedidoObj = {}
    PedidoObj=docSnap.data();
    fnsetObj(PedidoObj);
    // console.log("productoFunc", PedidoObj);

}


export const consultarProcesado = async (fnsetPedidos) => {
    
    // console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= query(collection(global.dbCon, "Pedidos"), where("StatusPedido", "==", true));
    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    await SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
       
            console.log("doce-------------------", documento.data());
            PedidoArray.push(documento.data());
        



    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc2", PedidoArray);

}


export const consultarNoProcesado = async (fnsetPedidos) => {
    
    // console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= query(collection(global.dbCon, "Pedidos"), where("StatusPedido", "==", false));

    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    await SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
       
            console.log("doce-------------------", documento.data());
            PedidoArray.push(documento.data());
        



    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc2", PedidoArray);

}


export const CambiarPedidoNoProcesado=(PedidoAux)=>{
    console.log(global.dbCon);
    console.log("-----------------------pediAux",PedidoAux)
    const productRef = doc(global.dbCon, "Pedidos", PedidoAux.id);
    setDoc(productRef, PedidoAux);
}