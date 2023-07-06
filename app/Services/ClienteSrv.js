import { collection, doc, getDocs,deleteDoc, setDoc, addDoc } from 'firebase/firestore'


export const guardarCliente = (cliente) => {
    console.log(global.dbCon);
    const clienteRef = doc(global.dbCon, "Pedidos", cliente.codigo);
    setDoc(clienteRef, cliente);
}
export const consultarClientes = async (fnsetCliente) => {
    //console.log("globla",global.dbCon);
    const productoRef = collection(global.dbCon, "UsuarioComun");
    const SnapPedidos = await getDocs(productoRef);
    let ClienteArray = []
    SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
        
            console.log("doce", documento.data());
            ClienteArray.push(documento.data());
        



    });

    fnsetCliente(ClienteArray)
    console.log("pediFunc", ClienteArray);

}

export const EliminarCliente = async (id,fnsetCliente,Clientes) => {

    const updatedCliente = Clientes.filter((service) => service.identificacion !== id);

    fnsetCliente(updatedCliente);
    console.log("------------------------------",id)
    await deleteDoc(doc(global.dbCon, "Usuarios", id));

    console.log("------------------------------------------------funcion eliminada",updatedCliente)

};