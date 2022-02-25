let products = require("../products");

const Task = require("../models/Task");

const getItems = async (req, res) => {
    try {
        const allitem = await Task.find();
        res.status(201).json({ success: true, data: allitem });
      } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
}

const postItems = async (req, res) => {
    try{
        const inp = await Task.create(req.body);
        products.push(inp);
        res.status(201).send({ success: true, data: inp });
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
}

const getItemsbyID = async (req, res) => {
    try{
        const itemid = await Task.findById(req.params.id);
        res.status(201).send({ success: true, data: itemid });
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
}

const deleteItems = async (req, res) => {
    try {
        const itemid = await Task.findById(req.params.id);
        const itemToDelete = await Task.findByIdAndDelete(itemid);
        if(!itemToDelete)
          return res.status(404).json({ success: false, msg: `Items id : ${itemid} deleted!` });
        return res.status(200).json({
          success: true,
          msg: `Item has been deleted`,
        });
      } catch (error) {
        return res.status(500).json({ success: false, msg: error });
    }
}

const updateItems = async (req, res) => {
    try{
        const {id} = req.params;
        const itemUpdate = await Task.findByIdAndUpdate(id, req.body,{
            new: true,
            runValidators: true
        });
        if(!itemUpdate)
            return res.status(404).json({success: false, msg: `No item with id: ${id}`});
        return res.status(200).send({success: true, data: itemUpdate});
    }catch(error){
        return res.status(500).json({success: false, msg: error});
    }
}

module.exports = {
    getItems, postItems, getItemsbyID, deleteItems, updateItems
};