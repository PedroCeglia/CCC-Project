// Import Auth Instance
import {auth} from '../..'

// Import AuthAPI Functions
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth'

// Import DatabaseAPI Functions
import {createUserInDatabase, setUserNameInDatabase} from '../Database'

// Login User Function
export function userLogin(email, password){
    if(email != null){
        if(password != null){
            signInWithEmailAndPassword(auth, email, password)
            .catch(snapshot=>{})
            .catch(erro => {
                if(erro){
                    const errorCode = erro.code;
                    switch (errorCode){
                        case 'auth/user-not-found':
                            alert('Não há registro de usuário existente correspondente ao identificador fornecido.')
                            break
                        case 'auth/invalid-email':
                            alert('Digite um valor de e-mail valido! Ex) ...@gmail.com')
                            break
                        case 'auth/wrong-password' :
                            alert('Senha Incorreta, tente de novo!')
                            break   
                        default:
                            alert('Erro Prencha todos os Campos de Forma Correta')
                            break       
                    }
                    console.log(errorCode)            
                }           
            })
        }
    }
}

// Create User Function
export function createUser(name, email, password){
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredencials =>{
        // Save User Dates in Database 
        const user = userCredencials.user;
        createUserInDatabase(name, email, user.uid)

        // Save User Name In Auth
        setUserName(user.uid, name)
    })
    .catch(erro => {
        if(erro){
            const errorCode = erro.code;
            switch (errorCode){
                case 'auth/invalid-email':
                    alert('Digite um valor de e-mail valido! Ex) ...@gmail.com')
                    break
                case 'auth/email-already-exists':
                    alert('Já existe um usuario com este e-mail!')
                    break
                case 'auth/weak-password':
                    alert('Digite uma senha com no minimo 6 digitos')
                    break        
                default:
                    alert('Erro Prencha todos os Campos de Forma Correta')
                    break                             
            }
            console.log(errorCode)               
        }
    })
}

// Verify if User Is Log
export function verifyUserLog(setUser){
    onAuthStateChanged(auth, user =>{setUser(user)})
}

// Set User Name
export function setUserName(id, name){
    updateProfile(auth.currentUser,{
        // Set User Name In Auth
        displayName:name
    }).then(()=>{
        // Set User Name In Database
        setUserNameInDatabase(name, id)

    }).catch((erro) =>{
        console.log(erro.code)
    })
}

// LogOut User Function
export function logOutUser(){
    signOut(auth)
}