const { ProductsManager } = require("./productManager");


const express = require('express')

const app = express()

const array = [
	{
		"title": "titulo 1",
		"description": "x 1",
		"price": 1,
		"thumbnail": "../img/img1.jpg",
		"code": "a01",
		"stock": 10,
		"id": 1
	},
	{
		"title": "titulo 2",
		"description": "x 2",
		"price": 2,
		"thumbnail": "../img/img2.jpg",
		"code": "a02",
		"stock": 20,
		"id": 2
	},
	{
		"title": "titulo 3",
		"description": "x 3",
		"price": 3,
		"thumbnail": "../img/img3.jpg",
		"code": "a03",
		"stock": 30,
		"id": 3
	},
	{
		"title": "titulo 4",
		"description": "x 4",
		"price": 4,
		"thumbnail": "../img/img4.jpg",
		"code": "a04",
		"stock": 40,
		"id": 4
	},
	{
		"title": "titulo 5",
		"description": "x 5",
		"price": 5,
		"thumbnail": "../img/img5.jpg",
		"code": "a05",
		"stock": 50,
		"id": 5
	},
	{
		"title": "titulo 6",
		"description": "x 6",
		"price": 6,
		"thumbnail": "../img/img6.jpg",
		"code": "a06",
		"stock": 60,
		"id": 6
	},
	{
		"title": "titulo 7",
		"description": "x 7",
		"price": 7,
		"thumbnail": "../img/img7.jpg",
		"code": "a07",
		"stock": 70,
		"id": 7
	},
	{
		"title": "titulo 8",
		"description": "x 8",
		"price": 8,
		"thumbnail": "../img/img8.jpg",
		"code": "a08",
		"stock": 80,
		"id": 8
	},
	{
		"title": "titulo 9",
		"description": "x 9",
		"price": 9,
		"thumbnail": "../img/img9.jpg",
		"code": "a09",
		"stock": 90,
		"id": 9
	},
	{
		"title": "titulo 10",
		"description": "x 10",
		"price": 10,
		"thumbnail": "../img/img10.jpg",
		"code": "a010",
		"stock": 100,
		"id": 10
	},
	{
		"title": "titulo 11",
		"description": "x 11",
		"price": 11,
		"thumbnail": "../img/img11.jpg",
		"code": "a011",
		"stock": 110,
		"id": 11
	},
	{
		"title": "titulo 12",
		"description": "x 12",
		"price": 12,
		"thumbnail": "../img/img12.jpg",
		"code": "a012",
		"stock": 120,
		"id": 12
	},
	{
		"title": "titulo 13",
		"description": "x 13",
		"price": 13,
		"thumbnail": "../img/img13.jpg",
		"code": "a013",
		"stock": 130,
		"id": 13
	},
	{
		"title": "titulo 14",
		"description": "x 14",
		"price": 14,
		"thumbnail": "../img/img14.jpg",
		"code": "a014",
		"stock": 140,
		"id": 14
	},
	{
		"title": "titulo 15",
		"description": "x 15",
		"price": 15,
		"thumbnail": "../img/img15.jpg",
		"code": "a015",
		"stock": 150,
		"id": 15
	},
	{
		"title": "titulo 16",
		"description": "x 16",
		"price": 16,
		"thumbnail": "../img/img16.jpg",
		"code": "a016",
		"stock": 160,
		"id": 16
	},
	{
		"title": "titulo 17",
		"description": "x 17",
		"price": 17,
		"thumbnail": "../img/img17.jpg",
		"code": "a017",
		"stock": 170,
		"id": 17
	},
	{
		"title": "titulo 18",
		"description": "x 18",
		"price": 18,
		"thumbnail": "../img/img18.jpg",
		"code": "a018",
		"stock": 180,
		"id": 18
	},
	{
		"title": "titulo 19",
		"description": "x 19",
		"price": 19,
		"thumbnail": "../img/img19.jpg",
		"code": "a019",
		"stock": 190,
		"id": 19
	},
	{
		"title": "titulo 20",
		"description": "x 20",
		"price": 20,
		"thumbnail": "../img/img20.jpg",
		"code": "a020",
		"stock": 200,
		"id": 20
	}
];


app.get('/productos', (req, res) => {
    const {uid} = req.query
    if(uid) return res.send(array)
    const prodFound = array.find (p => p.id === parseInt (uid))

    res.send(prodFound)
})

// app.get('/producto/:uid', (req, res) => {
//     const { uid } =req.params
//     const arr= array.find(u => u.id === parseInt (uid))

//     res.send(arr)
// })

app.listen(8080, error => {
    console.log('escuchando el puerto 8080')
})