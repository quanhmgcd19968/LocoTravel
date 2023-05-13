import { useState, useContext, useEffect, createContext } from "react";
import { auth, db } from "./../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  confirmPasswordReset
} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, doc, setDoc } from "firebase/firestore";


const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState({});

  async function signUp ( email, password) {
    const registerUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log(registerUser);
    setDoc(doc(db, "users", email),
    { 
      authProvider: "local",
      email: email,
    });
  }

  function logIn (email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut () {
    return signOut(auth);
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>
    {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });
  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    })
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword)
  }

  return (
    <AuthContext.Provider value={{signUp, logIn, logOut, forgotPassword, resetPassword, user}}>
    {children}
    </AuthContext.Provider>
  )
}
export function UserAuth() {
  return useContext(AuthContext);
}

// google authentication
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async() => {
    try {
        const userCredential = await signInWithPopup(auth, googleProvider);
        const user = userCredential.user;
        console.log(user);
        const q = query(collection(db, "users"), where("email", "==", user.email));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await setDoc(doc(db, "users", user.email), {
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

//reset password
const sendPasswordReset = async(email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export {signInWithGoogle, sendPasswordReset};