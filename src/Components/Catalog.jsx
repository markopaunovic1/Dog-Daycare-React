import { useState ,useEffect } from "react"
import { json } from "react-router-dom";

const URL = 'https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683';

const Catalog = (props) => {

    const [dogs, setDog] = useState([]);
    const [dogElements, setdogElements] = useState([]);
    const [selectedDog, setSelectedDog] = useState(null);

    useEffect(() => {
        fetch(URL)
        .then ((response) => response.json())
        .then ((data) => {
                setDog(data.record);
            console.log(data.record);
        });
            
    }, []);

    useEffect(( onSelectDog ) => {
        const elements = dogs.map((dogsData) => (<li key={dogsData.id} onClick={() => onSelectDog(dogsData)} className="dogItem">{dogsData.name} {dogsData.breed}</li> ));
        setdogElements(elements);
        console.log(elements.dogsData);
    }, [dogs]);
    
const showDogImage = () => {
    const dogImage = dogs.map((dogsData) => (<div>{dogsData.img}</div>))
    console.log(dogImage)
    return(
        <img>{dogImage}</img>
    )
}

    return (
        <div>
            <section className="catalog">
                <h1 className="Catalog-title">Registered Dogs:</h1>
                    <ul className="list-of-dogs">
                        <p>{dogElements}</p>
                        <ul>{showDogImage}</ul>
                    </ul>
    {/*             <p>current item: {setItem(json.current.name)}</p>
    */}    </section>
        </div>
    )
}


export default Catalog