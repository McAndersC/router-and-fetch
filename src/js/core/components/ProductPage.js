import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import ProductItem from "./ProductItem";

const ProductPage = () => {

    // Vi henter vores data igen på samme måde.
    const [ourData, setOurData] = useState([]);

    // En ny state-variabel.
    const [productData, setProductData] = useState({});

    // Vores adgang til URL parametre.
    let params = useParams();

    /* 
    
    Vi har nu oprettet en state-variable getter/setter.
    Til at holde på data´en for det ene produkt vi kigger på.

     const [productData, setProductData] = useState({});

    Dette komponent ved kun på nuværende tidspunkt.
    1. Hvilken data den har at arbejde med.
    2. Hvilken ID den skal prøve at vise.
    
    Så vi skal finde vores produkt data og udskrive det.
    */

    // Vi benytter useeffect til at hente data. 
    useEffect(() => {

        const file = '/data/ourData.json';

        // Vi fetcher/henter vores data.

        fetch(file)
        .then(response => response.json()) //<-- Vi forventer JSON data.
        .then((data) => {

            setOurData(data) // <-- Vi sætter vores state imagesData til resultatet af det vi hentede
          
        })

    }, []);

    /*
    
      Vi benytter endnu en useEffect til at finde vores ene produkt.

      Vi tager vores ourData som måske/måske ikke er hentet endnu.
      og vi bruger .find på vores array til at finde vores ene produkt.
      
      .find er en fin metode man kan bruge når man ønsker ét resultat, det første det bedste.

      Vi ønsker at finde det produkt, der har et id som er lig med det id vi får fra vores url-parameter.
      
      data.id === parseInt(params.id)

      Vi benytter en metode der hedder parseInt, på vores url parameter params.id, fordi vi ønsker at sammeligne med tal og ikke tekst.

      Når vi har fundet produktet, bruger vi setProductData til at sætte productData.
    
    */
    useEffect(() => {
  
        let pd = ourData.find((data) => data.id === parseInt(params.id));
        setProductData(pd);
     
    }, [params.id, ourData]);

    /*
    
      Tilsidst undersøger vi om der findes productData og udskriver vores ProduktItem.
      Ellers udskriver vi en "fejl side", prøv evt. http://localhost:3000/products/19230
    
      Åbn nu ProductItem.js
    */
    return productData ? <ProductItem product={productData}></ProductItem> : 'Produktet Findes Ikke'
  
  }
export default ProductPage