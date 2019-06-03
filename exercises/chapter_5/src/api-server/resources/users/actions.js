module.exports={
    userById: userById
}
function userById(id,users) {
    let user;
    users.forEach(function (userId) {
        if (userId.id == id) {
            user = userId;
        }
    });
    if (user) {
        return user;
    } else {
        return "user doesn't exist"
    }
}