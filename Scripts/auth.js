const firebaseConfig = {
    apiKey: "AIzaSyA4uLkheECN3Ra4tLsODdL5QHhg73bFue0",
    authDomain: "e-complaint-box-icd.firebaseapp.com",
    projectId: "e-complaint-box-icd",
    storageBucket: "e-complaint-box-icd.appspot.com",
    messagingSenderId: "850099385970",
    appId: "1:850099385970:web:58e5ace0391e17092a74eb"
};



firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();

async function signUp(event) {
    event.preventDefault();
    const email = document.querySelector('#signUpInputEmail2');
    const password = document.querySelector('#signUpInputPassword2');

    try {
        const result = await auth.createUserWithEmailAndPassword(email.value, password.value);
        console.log(result);
        window.location=`./main.html`;
        alert('User created!');
        // M.toast({html: `Welcome ${result.user.email}`, classes:"green"});
    } catch (err) {
        console.log(err);
        var er=document.getElementById("err");
        er.innerHTML=`
            <p>${err.message}</p>
        `
    }
}

async function login(event) {
    event.preventDefault();
    const email = document.querySelector('#loginInputEmail1');
    const password = document.querySelector('#loginInputPassword1');

    try {
        const result = await auth.signInWithEmailAndPassword(email.value, password.value);
        console.log(result);
        window.location=`./main.html`;
        alert('Succesfully Logged In');
        // M.toast({html: `Welcome ${result.user.email}`, classes:"green"});
    } catch (err1) {
        console.log(err1);
        var er=document.getElementById("err1");
        er.innerHTML=`
            <p>${err1.message}</p>
        `
    }
}

function logout(){
    
    firebase.auth().signOut().then(()=>{
        alert(`Logout Successful !`);
        window.location=`./index.html`;
    }).catch ((error)=>{
        alert(`Error in logut`);
    })
    // alert(`Logout Successful !`);
    // console.log("hi")
    // window.location=`./index.html`;
}

// firebase.auth().onAuthStateChanged((user) => {
//     if(user){
//     console.log(user);
//     }
//     else{
//     // console.log(`Logout Successful !`);
//     }
// });