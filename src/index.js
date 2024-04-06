const { ProductsManager } = require("./productManager");

const path = 'file/Products.json' 

const products = new ProductsManager(path);

const main = async () => {

//AQUI DEBERA DESCOMENTAR LA FUNCION addProductd PARA CREAR EL ARCHIVO Products.json Y LLENAR LOS CAMPOR COMO MAS PREFIERA PARA CREAR EL PRODUCTO. 

//DESPUES ELIJA LA ACCION QUE PREFIUERA TOMAR Y EJECUTE EL PROGRAMA

    /*
    
    const response = await products.addProduct({
        title: 'titulo 30',
        description: 'x 30',
        price: 30,
        thumbnail: '../img/img30.jpg',
        code: 'a030',
        stock: 300,
    })
    */

    //const response = await products.getProductById(8)

    const response = await products.getProducts()

    //const response = await products.updateProduct(1, 'titulo 1')

    //const response = await products.deleteProduct(3)

    console.log(response)
}

main()
