import { auth } from "../../../firebase/config";

export const signUp =  (email,password,setEmailSent,setError,setForm) =>{
   auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user; 

      user.sendEmailVerification()
        .then(()=>{
          setEmailSent(true)
          setError(false)
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

export const logIn =  (email,password,setError,setForm,setUser) =>{
   auth.signInWithEmailAndPassword(email,password)
  .then((userCredential) => {
    var user = userCredential.user;
    if(!user.emailVerified){
      setError('Please verify your email first :(')
      return;
    }
    setForm({
      email:'',
      name:'',
      password:''
    })
    setError(false)
    setUser(user)
  },err => setError(err.message))
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setError(errorMessage)
  });
}

export const signOut = (setUser) =>{
  auth.signOut()
    .then(()=>{
      console.log('successfully signed out');
      setUser(null)
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
