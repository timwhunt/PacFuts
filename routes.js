const controller = require("./controller");
var path = require("path");

module.exports = function(app){
    app.get('/api/pets',controller.all);
    app.get('/api/pets/:id',controller.get);
    app.post('/api/pets', controller.create);
    app.put('/api/pets', controller.update);
    app.delete('/api/pets/:id', controller.delete);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

};