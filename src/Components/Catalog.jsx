import { useState ,useEffect, createElement } from "react"
import { Link, json, useParams } from "react-router-dom";

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
        const dogPic = document.createElement('img');

        const elements = dogs.map((dogsData) => 
        (<li key={dogsData.record} onClick={() => onSelectDog(dogsData)} className="dogItem">
            {dogsData.name + ' '}
            {dogsData.breed} <img key={dogsData} src={dogsData.img} className="all-dogs-image"></img></li> ));
            
        setdogElements(elements);
        console.log(elements.dogsData);
    }, [dogs]);
    
    const passDogData = () => {
        const { handle} = useParams();
        const [dog, setDog] = useState(null);
    }

    return (
        <div>
            <section className="catalog">
                    <ul className="list-of-dogs">
                    <h1 className="Catalog-title">Registered Dogs:</h1>
                        <Link to={"/DogInfo"}>
                        <p>{dogElements}</p>
                        </Link>
                        {/* {dogs.map((image, index) => 
                        <img key={index} src={image.img} alt={'Image ${index'}></img>)} */}
                        {/* <ul>{showDogImage}</ul> */}
                    </ul>
    {/*             <p>current item: {setItem(json.current.name)}</p>
    */}    </section>
        </div>
    )
}


export default Catalog