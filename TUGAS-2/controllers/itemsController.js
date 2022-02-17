let products = require("../products");

const getItems = (req, res) => {
    res.json(products);
}

const postItems = (req, res) => {
    const inp = req.body;
    products.push(inp);
    res.send(`Item ${inp.name} added succesfully!`);
}

const getItemsbyID = (req, res) => {
    // console.log(req.params);
    const {id} = req.params;
    const foundItem = products.find((inp) => inp.id === id);
    res.send(foundItem);
}

const deleteItems = (req, res) => {
    const {id} = req.params;
    products = products.filter((inp) => inp.id !== id);
    res.send(`User with the id ${id} deleted!`);
}

const updateItems = (req, res) => {
    const {id} = req.params;
    const {name, price, stock} = req.body;
    const itemToUpdate = products.find((inp) => inp.id === id);
    if(name)
        itemToUpdate.name = name;
    if(price)
        itemToUpdate.price = price;
    if(stock)
        itemToUpdate.stock = stock;
    res.send(`Item with id ${id} has been updated!`);
}

module.exports = {
    getItems, postItems, getItemsbyID, deleteItems, updateItems
};