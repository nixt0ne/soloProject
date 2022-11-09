const { authenticate } = require('../config/jwt.config')
const SgsController = require ('../controllers/sgs.controllers')

module.exports = (app) => {
    app.get('/api/homeProfile',authenticate, SgsController.getSGS) 
    app.get('/api/allForum',authenticate, SgsController.getSGSUsers)
    app.get('/api/oneSGS/:id', authenticate, SgsController.getOneSGS) 
    app.post('/api/createSGS', authenticate, SgsController.addSGS)
    app.put('/api/updateSGS/:id', authenticate, SgsController.updateSGS)
    app.delete('/api/deleteSGS/:id', authenticate, SgsController.deleteSGS)
    
}