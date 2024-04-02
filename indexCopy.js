const http = require ('http')

const server = http.createServer((req, res) => {
    console.log(req)
    const { url } = req

    if (url === '/') return res.end('hola, soy un servidor')
    if(url === '/title') return res.end('el title es title')
})
//localhost:8000 => 127.0.0.1:8000
server.listen(8000, err =>{
    if (err) console.log(err)

    console.log('escuchando el puerto 8000')
})

