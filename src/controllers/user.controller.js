
const User = require('../models/users');


module.exports = {
    getUsers: async(req, res) => {

        try{
            const user = await User.find();
    
            if(user){
                return res.status(200).json(user);
            }
            return res.status(400).send('No se pudo procesar su solicitud');
            
        }catch(error){
            return res.status(500).send('Ha ocurrido un problema');
        }
    },
    getUser: async(req, res) => {

        try{
            const user = await User.findOne({_id: req.params.id});
    
            if(user){
                return res.status(200).json(user);
            }
            return res.status(404).send('No se encontró ningún usuario con ese id');
            
        }catch(error){
            return res.status(500).send('Ha ocurrido un problema');
        }
    
    }
}