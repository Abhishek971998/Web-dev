
// const getFirstUserData = async () => {
//     let output="";
//     const res= await fetch("https://jsonplaceholder.typicode.com/users") 
//     const data =  await res.json();
//         data.map((user)=>{
//             output += user.name
//         })
//         document.getElementById("demo").innerHTML= output
       
   
//    }

// getFirstUserData();

// console.log(fetch("https://reqres.in/api/users"))
  
         //    FETCH REQUEST
fetch("https://reqres.in/api/users")
.then(res=>res.json())
.then(data =>console.log(data))

          // POST REQUEST
fetch("https://reqres.in/api/users",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        name:"USer 1"
    })

}).then(res=>{
    if(res.ok){
        return res.json()
        console.log("all ok")
    } else {
        console.log("not successfull")
    }
})


.then(data=>console.log(data))
.catch(error=>console.log("error"))


