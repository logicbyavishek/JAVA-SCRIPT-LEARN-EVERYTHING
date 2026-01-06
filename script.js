function getUser(username , cb){
    console.log("Fetching user from DB...");
    setTimeout(() => {
        cb({id:1223, username: username});
    }, 1000);
}

function getUserPosts(ussrId,cb){
    console.log("Fetching posts from DB...");
    setTimeout(() => {
        cb(["post1","post2","post3"]);
    }, 1000);
}

getUser("Avi",function(obj){
    console.log("fetching userID .....")
    getUserPosts(obj.id,function(posts){
        console.log(posts);
    });
})