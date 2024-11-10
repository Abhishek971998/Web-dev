

    ////////////////// PROMISES   //////////
    const posts = [
        {title:"post one"},
        {title:"post two"}
    ];
    function getPosts(){
        setTimeout(()=>{
            let output ="";
            posts.map((val)=>{
                output+=`<li>${val.title}</li>`
            })
            document.getElementById("demo").innerHTML=output
        },1000)
    }
    // getPosts()
    function createPost(newpost){
          return new Promise((res,reject)=>{
            setTimeout(() => {
                let error= false
                if(!error) {
                res("no error");
               }else  {
                reject("something went wonr")
               }
                posts.push(newpost)
           },2000);
          })
    }
    createPost({title:"post three"})
    .then(res=>console.log(res))
    .then(getPosts)
    .catch((err)=>console.log(err))
    
    
    
    
    // Promise All
    const promise1 = Promise.resolve("Hello")
    const promise2 = 10;
    const promise3= new Promise((res,err)=>{
        setTimeout(res,2000,"goodbye")
    })
    
    const promise4 = fetch
    ("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    
    Promise.all([promise1,promise2,promise3,promise4])
    .then((values)=>console.log(values))
    