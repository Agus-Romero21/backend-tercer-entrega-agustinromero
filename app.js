const { ProductsManager } = require("./productManager");

const path = 'file/Products.json' 

const products = new ProductsManager(path);

const main = async () => {

//AQUI DEBERA DESCOMENTAR LA FUNCION addProductd PARA CREAR EL ARCHIVO Products.json Y LLENAR LOS CAMPOR COMO MAS PREFIERA PARA CREAR EL PRODUCTO. 

//DESPUES ELIJA LA ACCION QUE PREFIUERA TOMAR Y EJECUTE EL PROGRAMA


    
    const response = await products.addProduct({
        title: 'titulo 20',
        description: 'x 20',
        price: 20,
        thumbnail: '../img/img20.jpg',
        code: 'a020',
        stock: 200,
    })
    

    //const response = await products.getProductById(8)

    //const response = await products.getProducts()

    //const response = await products.updateProduct(1, 'titulo 1')

    //const response = await products.deleteProduct(3)

    console.log(response)
}

main()

//LO HICE ASI MIRANDO EL VIDEO DEL AFTER PORQUE NO PUDE MEZCLAR LA ENTREGA ANTERIOR CON ESTA DE UNA MANERA EN LA QUE ME FUNCIONARAN TODAS LAS FUNCIONES,
// PERO CREO QUE CUMPLE CON LO QUE SE PIDIO