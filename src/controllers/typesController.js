import types from "../models/Type.js"

class TypeController{
    
    static listTypes = (req, res) => {
        types.find((err, types) => {
            res.status(200).json(types);
        });
    }

    static listTypeById = (req, res) => {
        const id = req.params.id;
        types.findById(id, (err, type) => {
            if(err){
                res.status(400).send({message: `${err.message} - Type id not found!`});
            }else{
                res.status(200).send(type);
            }
        });
    }

    static createType = (req, res) => {
        let type = new types(req.body);
        type.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Failed to create type!`});
            }else{
                res.status(201).send(type.toJSON());
            }
        });
    }

    static updateType = (req, res) => {
        const id = req.params.id;
        types.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message});
            }else{
                res.status(200).send({message: `Successfully updated type!`});
            }
        });
    }

    static deleteType = (req, res) => {
        const id = req.params.id;
        types.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message});
            }else{
                res.status(200).send({message: `Successfully deleted type!`});
            }
        });
    }

}

export default TypeController;