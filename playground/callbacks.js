var getUser =(id, callback) => {
    var user = {
        id: id,
        name: 'Sasidhar'
    };
    setTimeout(() => {
        callback(user);
    }, 3000)
    
};

getUser(26, (userObj) =>{
    console.log(userObj);
})