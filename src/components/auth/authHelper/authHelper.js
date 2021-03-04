import { auth } from "../../../firebase/config";


export const signUp = async (email,password,setEmailSent,setError,setForm) =>{
  await auth.createUserWithEmailAndPassword(email, password)
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


export const logIn = async (email,password,setError,setForm) =>{
  await auth.signInWithEmailAndPassword(email,password)
  .then((userCredential) => {
    var user = userCredential.user;
    if(!user.emailVerified){
      setError('Please verify your email first :(')
      return;
    }
    console.log('success full logged in');
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

}

export const isAuthenticated = () =>{
    
}