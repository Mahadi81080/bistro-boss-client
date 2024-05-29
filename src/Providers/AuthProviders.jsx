import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,

  signInWithEmailAndPassword,

  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const axiosPublic =useAxiosPublic()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  //   Creat user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // get token and store client
        const userInfo ={email:currentUser.email}
        axiosPublic.post('/jwt',userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token)
          }
        })
        
      } else {
        // remove token
        localStorage.removeItem('access-token')
      }
      console.log("Current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe;
    };
  }, [axiosPublic]);
  //   Sing In
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  };
  // Google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const userUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const authInfo = {
    user,
    loading,
    creatUser,
    singIn,
    logOut,
    userUpdateProfile,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
