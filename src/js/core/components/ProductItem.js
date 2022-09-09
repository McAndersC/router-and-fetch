import React from "react";

/*

    Selve vores detalje komponent for produktet. 
    Som i List item modtager vi product data
    Og udskriver relevant data.

*/
const ProductItem = ({product}) => { //<-- læg mærke til at vi ved hælp af deconstruct, springer over, "props" og trækker products direkte ud.
    return <div className={'product-item'}>
        <div>
            <h1>Produkt Title = {product.title}</h1>
            <h2>Produkt Id = {product.id}</h2>
            <h3>Produkt Image = {product.image}</h3>
            <img src={'/' + product.image} alt="demo" width={'100px'}/>
        </div>
    </div>
}

export default ProductItem