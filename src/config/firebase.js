import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDVsZb0kSH8qZoBGn3hSnwcPfAcMUsYTzQ",
  authDomain: "fasonfilms-71a95.firebaseapp.com",
  projectId: "fasonfilms-71a95",
  storageBucket: "fasonfilms-71a95.firebasestorage.app",
  messagingSenderId: "173699455310",
  appId: "1:173699455310:web:57ae03c6b39e20cbdfa61f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

// user sign up

async function signUp(name,email,password){
    try{
        const response = await createUserWithEmailAndPassword(auth,email,password)
        const user = response.user

        // store user
        await addDoc(collection(database,"user"),{
            uid: user.uid,
            username: name,           
            authProvider: "local",
            email:email,
        })
        return user

    }catch(error){
        console.log(error)
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

// Sign in

async function signIn(email,password){
    try{
        await signInWithEmailAndPassword(auth,email,password)

    }catch(error){
        console.log(error)
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

// logout 
async function logout(){
    try{
        await signOut(auth)

    }catch(error){
        console.log(error)
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }

}


export { auth, database , signUp,signIn,logout };