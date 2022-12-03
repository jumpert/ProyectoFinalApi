const Item = require('../models/items');

const getItems = async(req, res) => {
            
    try{
        const item = await Item.find();

        if(item){
            return res.status(200).json(item);
        }
        return res.status(400).send('No se pudo procesar su solicitud');
        
    }catch(error){
        return res.status(500).send('Ha ocurrido un problema');
    }
}

const getItem = async(req, res) => {
    
    try{
        const item = await Item.findOne({_id: req.params.id});

        if(item){
            return res.status(200).json(item);
        }
        return res.status(404).send('No se encontró ningún item con ese id');
        
    }catch(error){
        return res.status(500).send('Ha ocurrido un problema');
    }
    
}

const getItemsByCategory = async(req, res) => {
        
        try{
            const item = await Item.find({type: req.params.type});
            
            if(item){
                if (null) {
                    return res.status(404).send('No se encontró ningún item con ese tipo');
                }
                return res.status(200).json(item);
            }
            return res.status(404).send('No se encontró ningún item con esa categoría');
        }catch(error){
            return res.status(500).send('Ha ocurrido un problema');
        }
}

module.exports = {
    getItems,
    getItem,
    getItemsByCategory
}