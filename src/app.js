const express = require('express')
const app = express()



const { ProductsManager } = require("./productManager");

const path = 'file/Products.json' 
const products = new ProductsManager(path);


app.get('/productos', async (req, res) => {
    const {limit} = req.query
    const response = await products.getProducts()

    if(!limit) return res.send(response)
    const prodFound = response.filter (p => p.id === parseInt(limit))
    res.send(prodFound)
})

app.get ('/productos/:pid', async (req,res) => {
    const {pid} = req.params

    const productFound = await products.getProductById(parseInt(pid))
    if(productFound)res.send(productFound) 

    res.send('el producto no fue encontrado')
})

app.listen(8080, error => {
    console.log('escuchando el puerto 8080')
})

