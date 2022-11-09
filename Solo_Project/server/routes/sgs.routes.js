const SgsController = require ('../controllers/sgs.controllers')

module.exports = (app) => {
    app.get('/api/homeProfile', SgsController.getSGS) 
    app.get('/api/oneSGS/:id', SgsController.getOneSGS) 
    app.post('/api/createSGS', SgsController.addSGS)
    app.put('/api/updateSGS/:id', SgsController.updateSGS)
    app.delete('/api/deleteSGS/:id', SgsController.deleteSGS)
    
}