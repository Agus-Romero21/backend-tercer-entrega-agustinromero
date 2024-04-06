const express = require('express')
const app = express()

const { ProductsManager } = require('./productManager')
const prods = new ProductsManager()



app.get('/productos', async (req, res) => {
    const {limit} = req.query

	const product = await prods.getProducts()
	console.log(product)

    if(!limit) return res.send(product)

    const prodFound = product.filter (p => p.id === parseInt(limit))
     res.send(prodFound)
})

app.listen(8080, error => {
    console.log('escuchando el puerto 8080')
})

