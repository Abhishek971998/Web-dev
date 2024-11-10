


///////////  CALL BACK  // /////////////
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
        document.body.innerHTML= output
    },1000)
}

function createPost(post,cb){
    setTimeout(()=>{
    posts.push(post)
       cb()
    },1000);

}
// getPosts()
createPost({title:"post three"},getPosts)
// ////////////////////////////////////////



