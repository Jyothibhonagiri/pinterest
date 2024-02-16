
let dashboarddiv = document.getElementById("dashboard");
let a = document.getElementById("container")
dashboarddiv.style.display = "none";
a.style.display = "block";


function gotodashboard(){
    a.style.display="none";
    dashboarddiv.style.display="block";
}


async function login(event){
    event.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(email,password)
    await localStorage.setItem(email,password)
    const user = await localStorage.getItem(email,password)
    
    if(!user){
        alert("user not found")
    }else{
        if(user === password){
            alert("login success")
            localStorage.setItem("loggedinuser",email)
            gotodashboard()
        }else{
            alert("invalid credentials")
        }
    }
}

