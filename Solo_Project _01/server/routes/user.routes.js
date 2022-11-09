const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/register', UserController.registerUser),
    app.post('/api/login', UserController.loginUser),
    app.get('/api/getLoggedUser', UserController.getLoggedInUser),
    app.get('/api/logout', UserController.logOutUser),
    app.put('/api/updateUser', UserController.updateUser),
    app.get('/api/allUsers', UserController.getAllUsers),
    app.delete('/api/deleteUser/:id', UserController.deleteUser)
}