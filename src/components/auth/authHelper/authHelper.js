import { auth, firestore } from "../../../firebase/config";


export const signUp =  (email,password,name,setEmailSent,setError,setForm) =>{
   auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user; 
      user.sendEmailVerification()
        .then(()=>{
          setEmailSent(true)
          setError(false)
          firestore.collection('USERS').doc(user.uid).set({
            displayName:name,
            email:email,
            role:'regular',
            userId:user.uid
          })
          setForm({
            name:'',
            email:'',
            password:''
          })
          
        },err=>{
          var errorMessage = err.message;
          setError(errorMessage)
        })
    },err=>{
      var errorMessage = err.message;
      setError(errorMessage)
    })
    .catch((error) => {
        var errorMessage = error.message;
        setError(errorMessage)
    });
} 

export const logIn = async (email,password,setError,setForm,setUser,dispatch) =>{
   auth.signInWithEmailAndPassword(email,password)
  .then((userCredential) => {
    var user = userCredential.user;
    if(!user.emailVerified){
      setError('Please verify your email first :(')
      return;
    }
    return firestore.collection('USERS').doc(user.uid).get()
  })
  .then((response)=>{
    const userInfo = response.data()
    dispatch({
      type:'user',
      user:userInfo
    })
    setForm({
      email:'',
      name:'',
      password:''
    })
    setError(false)
  },err => setError(err.message))
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setError(errorMessage)
  });
}

export const signOut = () =>{
  auth.signOut()
    .then(()=>{
      console.log('successfully signed out');
    },err=>console.log(err.message))
    .catch(err=>{
      console.log(err.message)
    })
}

export const forgotPass = (email,setEmail,setEmailSent,setError) =>{
  console.log('sahil');
  auth.sendPasswordResetEmail(email)
    .then(()=>{
      setEmailSent(true)
      setEmail('')
    },err=>setError(err.message))
    .catch(err=>setError(err.message))
}
