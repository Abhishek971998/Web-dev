








    //////////////////////// ASYNC AWAIT //////////////////////////////////
const posts = [       
    {title:"post one"},
    {title:"post two"}
];

function getPosts(){
    setTimeout(()=> {
        let output = '';
        posts.forEach((post,index)=>{
             output += `<li>${post.title}</li>`
        })
        document.getElementById("demo2").innerHTML= output
    },1000)
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        posts.push(post)
        const error = false
        if(!error){
            resolve("successfull");
        }else{
            reject("something went wrong")
        }
        },2000);
      })
   }

async function init(params) {
    await createPost({title:"post three"})
    getPosts()
}
init()

// ////////////////////////////////////////Example 2 /////////////////////////
async function fetchUsers() {
//    step 1
    let output = '';

//    step 2 
    const res = await fetch
     ("https://jsonplaceholder.typicode.com/users")

//    step 3
     const data =  await res.json();

//     step 4
     data.map((post,index)=>{
             output += `<li>${post.name}</li>`
        })

//     step 5
       document.getElementById("demo").innerHTML= output
       console.log(data)

}
fetchUsers()
