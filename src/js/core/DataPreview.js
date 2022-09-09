import React, {useState, useEffect} from "react";

const DataPreview = () => {
    
    // Vi benytter useState for at få en getter/setter til vores ourData
    const [ourData, setOurData] = useState([]);

    /*
    
        Her benytter vi "useEffect" hook´en.
        Fordi vi ønsker at hente data som vi skal bruge i komponentet, så bruger vi useEffect fordi den køre hver gang
        et komponent bliver renderet.

        Så i dette tilfælde hente vi data, vi bruger useState (setOurData) til at sætte vores data.

    */

    useEffect(() => {

        // Vi opretter en reference til vores fil.
        const file = '/data/ourData.json';

        // Vi fetcher/henter vores data.
        fetch(file)
        .then(response => response.json()) //<-- Vi forventer JSON data.
        .then((data) => {

            // Vi sætter vores state imagesData til resultatet af det vi hentede
            setOurData(data) 
            
        })


      }, []);

    // Vi udskriver HELE vores data array i et <pre> tag og benytter en "fræk" udvidelse af JSON.stringify metoden, til at udskrive vores json, formateret og som en streng.
    return <pre>{JSON.stringify(ourData, null, 2)}</pre>

}

export default DataPreview