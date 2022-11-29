import React, {useEffect, useState} from "react";
import ProductListItem from "./ProductListItem";

const ProductsPage = () => {

    // Samme som i vores Previev, en getter settet til vores data.
    const [ourData, setOurData] = useState([]);


    useEffect(() => {

      // Fuldstændig samme procedure som i Preview. Vi henter data og sætter vores state ourData.
        const file = './data/testJson.json';

        // Vi fetcher/henter vores data.

        fetch(file)
        .then(response => response.json()) //<-- Vi forventer JSON data.
        .then((data) => {

            setOurData(data) // <-- Vi sætter vores state ourData til resultatet af det vi hentede
            
        })


      }, []);

    /* 
        Nu map´er vi over vores data og for hvert Product i data´en, indsætter vi vores ProductListItem Komponent.
        Vi tildeler ProductListItem en prop "product" og værdien vi indsætter er Produkt data´en for hvert produkt.

        Åbn ProduktListItem.js filen. Og Læs.
    */

    return ourData.map((product) => <ProductListItem key={product.id} product={product}></ProductListItem>);
  
  }

export default ProductsPage