import React from "react";
import {Link} from 'react-router-dom';

/* 

  Vores productList item komponent.
  
  Vi modtager vores produkt data : ProductListItem = ({product}). 
  Og vi udskriver det meget råt.

  Vi benytter Link fra router modulet og indsætter et link i hvert produkt, der linker til produktes underside.

  F.eks: "http://localhost:3000/products/2"

  Dette link vil føre til produkt 2´s detalje side.

  Vi bruger id´et fra vores data to={`/products/${product.id}` fordi vi tidligere i routes valgte :id som vores "identifier".

  Tryk på et link og se en produkt side, Åbn ProductPage.js
*/
const ProductListItem = ({product}) => { // <-- læg mærke til at vi ved hælp af deconstruct, springer over, "props" og trækker products direkte ud.

    return <div className={'product-list-item'}>
      <div>
        <h1>Produkt Title = {product.title}</h1> 
        <h2>Produkt Id = {product.id}</h2>
        <h3>Produkt Image</h3>
        <img src={'/' + product.image} alt="demo" width={'100px'}/>
      </div>
      <div>
        <Link to={`/products/${product.id}`}>{product.title}</Link> 
      </div>

    </div>

}

export default ProductListItem