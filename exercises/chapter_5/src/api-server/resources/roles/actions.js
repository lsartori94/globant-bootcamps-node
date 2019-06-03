module.exports={
    rolById: rolById
}
function rolById(id,roles) {
    let rol;
    roles.forEach(function (rolId) {
        if (rolId.id == id) {
            rol = rolId;
        }
    });
    if (rol) {
        return rol;
    } else {
        return "rol doesn't exist"
    }
}