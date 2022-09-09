# Læs og forstå opgave.

```
Dette er også en prototype som i kan bruge, igen og igen, når i gerne vil hurtigt igang med at eksperimentere.

I skal selvfølgelig IKKE se video´en, hvis i allerede har set den. (men det skader ikke :o)
```

Først gennemgår jeg lige ```useState()``` og ```useEffect()``` og derefter forklare jeg koden i dette projekt. Læse hele dette dokument igennem og følg det.

Husk npm install hvis i ikke har en node_modules mappe.
```javascript
npm install
```

## Hooks (kroge, vi har nogle kroge i koden.)

React introducerede "hooks" i version 16. Se video´en om ```functional components``` og hooks.

[Dan Abramov video om Hooks, starter efter 11 minutter](https://www.youtube.com/watch?v=dpw9EHDh2bM)

Og hooks skal forståes som hjælpe metoder, der løser forskellige opgaver, som vi før kunne løse i class components men som nu, med stor fordel, kan benyttes i funktional components.

Populært sagt er alle de metoder, der starter med lille "use" efterfulgt af en metode skrevet med stort, en hook. altså useState, useEffect, useContext osv.

[Se, og læs overfladisk, om alle "hook" referencer her](https://reactjs.org/docs/hooks-reference.html)

### State Hook (useState).

Vi har indtil nu benyttet "State hook" ```useState```, så vi kan lave en setter/getter til vores state. F.eks.

**En string ("tekst")**

```javascript 
const [name, setName] = useState('no-name');
```
Vi setter, vores ```name``` med ```setName('Anders')```;    
Vi getter, vores ```name``` med ```{name}```

**Et tal**

```javascript 
const [myNumber, setMyNumber] = useState(5);
```
Vi setter, vores ```myNumber``` med ```setMyNumber(78)```;    
Vi getter, vores ```myNumber``` med ```{myNumber}```

**eller med Booleans** (true/false).

```javascript 
const [isLoaded, setIsLoaded] = useState(true);
```
Vi setter, vores ```isLoaded``` med ```setIsLoaded(false)```;    
Vi getter, vores ```isLoaded``` med ```{isLoaded}```

**eller med Objekter**.

```javascript 
const [user, setUser] = useState({'name' : 'Anders', 'age' : 19});
```
Vi setter, vores ```setUser``` med ```setUser({'name' : 'Anders Christensen', 'age' : 19})```;    
Vi getter, vores ```user``` med ```{user.name} - {user.age}```

**eller med Arrays**.

```javascript 
const [myNumbers, setMyNumbers] = useState([1,2,3]);
```
Vi setter, vores ```setMyNumbers``` med ```setMyNumbers([1,2,3,4,5,6,7])```;    
Vi getter, vores ```myNumbers``` med ```{myNumbers.map(...)}```

På den måde lytter komponentet på vores state variabler, og når de opdateres, så opdaterer vores komponents UI. 

Hvis du *IKKE* har brug for at komponentet skal opdatere, så behøver du ikke at benytte states. States er til de variabler der har en indflydelse på selve komponentets rendering, UI.

Der er selvfølgelig, som altid, et lag mere til forståelsen af states, og det handler om noget der hedder mutable og immutable states - Det er for langhåret til os lige nu, så det lader vi ligge, men du er velkommen til at undersøge.

### Effect Hook (useEffect).

```useEffect``` hook er en anden størrelse. Man må ikke misforstå den på navnet, det har intet med visuelle effekter at gøre. Det har at gøre med de effekter/funktioner du gerne vil udføre når komponentet renderes. 

Tænkt tilbage til snakken om ```class-components```. Vi talte om at de har en *livs-cyklus*.
Et komponent, fødes, lever og dør. I ```class-components``` er det
```
componentDidMount() {

    --> Det der sker når komponentet er "født" mounted.

    Vi henter f.eks data fra et api og opdatere vores state med denne data.

}

componentWillUnmount() {

    --> Det der sker når komponentet "dør" un-mounted.

    Vi unloader eventuelle timere, eller eventhandlers, ting vi satte i gang under vores mount.
}
```

I ```functional-components``` benytter vi istedet ```useEffect``` hook, når vi vil fortælle vores komponent at vi har tænkt os at hente data (fra api eller lign) og berige vores komponent med det. I denne opgave vil vi benytte det til at hente data til vores data.

Som med ```useState``` så placere vi vores ```useEffect``` hook i toppen af vores component, som det første efter states. 

```
const Komponent = (props) => {

  const [ourData, setOurData] = useState([]);

  useEffect(() => {

        const file = '/data/ourData.json';

        fetch(file)
        .then(response => response.json())
        .then((data) => {

            setOurData(data)
            
        })

  }, []);
}
```

Så vedhjælp af ovenstående funktionalitet henter vi, til vores komponent, JSON data fra ```ourData.json``` filen. Når vi har modtaget det, benytter vi ```setOurData(data)``` så vi opdatere vores state så ```imagesData``` nu er fyldt med indholdet fra ```ourData.json```.

Det er den meget korte version til at starte med, vi går i dybden ned af vejen, og vi bygger mere og mere på.

Men dette er tilstrækkeligt til at vi kan hente den data som vi kan benytte i vores komponent(er). På den måde kan man også lave komponenter der isoleret set, står for at udføre "hele" opgaven.

Vores "applikationer" kan jo i virkeligheden være én del af applikationer i et større system, ligesom vores komponenter er små dele af vores "system".

--

## Nu til koden i dette projekt. Vi starter med Routeren.

*nb: navigations menuen  er i App.js over vores routes.*

I dette projekt har vi opsat en router, fordi vi ønsker forskellige sider, og vi ønsker at vi kan benytte frem/tilbage funktionaliteten i vores browser. Samtidigt øsnker vi også at kunne "deep-linke" (http://localhost:3000/products/3), altså linke direkte til et produkt.

Så i ```index.js``` er ```BrowserRouter``` indsat som en "wrapper" omkring vores ```App```.`

Og i ```App.js``` har vi opsat følgende router.

```html
<Routes>

    <Route path="/" element={<HomePage />} />

    <Route path="/data" element={<DataPreview />} />

    <Route exact path="products" element={<ProductsPage/>} /> 
    <Route path="products/:id" element={<ProductPage />} />

    <Route
        path="*"
        element={<NoResult404 />}
    />

</Routes>
```

Router:

* "http://localhost:3000/" til forside.
* "http://localhost:3000/data" til datapreview siden.
* "http://localhost:3000/products" til siden der viser alle produkter.
    * "http://localhost:3000/products/ID-FOR-PRODUKT" til siden der viser et produkt.
* "*" alle andre forsøg bliver fanget af denne regle (404) = ingen side. F.eks. http://localhost:3000/en-side-der-ikke-findes

Dette kender vi efterhånden, og nu skal vi arbejde med "products" routerne, altså de dynamiske router.

```html
<Route exact path="products" element={<ProductsPage/>} /> 
<Route path="products/:id" element={<ProductPage />} />
```

Ideén er, at ```products``` siden viser alle vores "produkter" fra vores data. og ```products/:id``` siden skal vise data´en for ét produkt. Vi har set at vores ```:id``` parameter, er vores mulighed for at fange hvad der står bagefter http://localhost:3000/products/:id. <-- Id´et er vores måde at få fat i værdien.

Så: http://localhost:3000/products/hello vil aflevere "hello" som vores :id. 

I dette projekt bruger vi ID´et, men vi kan bruge stenge/tekst også, som vi gøre her med "hello".

--

## Det var routerne. Nu til useEffect, params og data i brug.

Få startet projektet og åbn siden ```Preview```, Åbn også ```DataPreview.js``` filen og læs kommentarene.

```Preview``` siden er bare til demo, den har til hensigt at vise hvordan vi med hjælp af ```useEffect``` henter data, og ved hjælp af ```useState```
sætter vores data. Og tilsidst udskriver vi det i et ```<pre>``` tag - og vi udskriver alt data´en i vores array på én gang ingen loops. Et helt, ind-til-benet eksempel.

Gå derefter til ```Products``` siden og åbn ```ProductsPage.js``` (*bemærk, ProductsPage med s*) filen, herfra skal du følge kommentarene og læse det hele, jeg guider dig til de filer du skal åbne derinde.

Med denne lille prototype, har man:

* En React application med Routing med tilhørende dynamisk route.
* Man fetcher data og præsentere alle produkter og produkt detalje side.
* Vi har en DataPreview som viser, helt råt, den data vi arbejder med.
* Og til sidst har vi et par præsentations komponenter til lister og sider der udskriver vores html, css og data.

Dette er grundlaget for mange små og store applikationer, og med denne opsætning kan i gå mange veje.

God fornøjelse.





