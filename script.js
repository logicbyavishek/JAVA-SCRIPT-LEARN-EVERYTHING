function loginUser(user , cb){
    console.log("User logging in ...");
    setTimeout(() => {
        cb({id: 1, name: user});
    }, 1000);
}
function fetchPermissions(userID , cb){
    console.log("Fetching user permissions ...");
    setTimeout(() => {
        cb(["read", "write", "execute"]);
    }, 2000);
}
function loadDashboard(permissions,cb){
    console.log("Loading dashboard ...");
    setTimeout(() => {
        cb();
    }, 3000);
}


loginUser("Avi",function(obj){
    fetchPermissions(obj.id,function(permissions){
        loadDashboard(permissions,function(){
            console.log("Dashboard loaded with permissions: " + permissions);
        });
    });
});

