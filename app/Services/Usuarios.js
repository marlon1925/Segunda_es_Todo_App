
import {collection, doc,getDocs,setDoc,addDoc} from 'firebase/firestore'





export const guardarUSuario=(usuario)=>{
    const productRef=doc(global.dbCon,"Administradores",usuario.identificacion);
    setDoc(productRef,usuario);


}


export const guardarUSuario2=(usuario)=>{
    const productRef=doc(global.dbCon,"UsuarioComun",usuario.identificacion);
    setDoc(productRef,usuario);


}