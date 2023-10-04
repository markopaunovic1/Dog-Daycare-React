import { useState ,useEffect, createElement } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import noImage from "../assets/noImage.png"

const URL = 'https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683';

const Catalog = (props) => {

    const [dogs, setDogs] = useState([]);
    const [dogElements, setdogElements] = useState([]);
    const [selectedDog, setSelectedDog] = useState(0);

    useEffect(() => {
        fetch(URL)
        .then ((response) => response.json())
        .then ((data) => { setDogs(data.record);
            console.log(data);
        });

    }, []);

    useEffect(() => {
        const length = Array.length;

        const elements = dogs.map((dogsData) => (
        <Link to={`/DogInfo/${ dogsData.chipNumber }`}>
            <li key={dogsData} className="dogItem">
                { dogsData.name + ' ' }
                { dogsData.breed + ' ' } 
                <img key={ dogsData } src={ dogsData.img } 
                onError={(e) => (e.currentTarget.src = noImage)} className="all-dogs-image"></img>
            </li>
        </Link> ));
            
        setdogElements(elements);
    }, [dogs]);

    return (
        <div>
            <section className="catalog">
                    <ul className="list-of-dogs">
                    <h1 className="Catalog-title">Registered Dogs:</h1>
                        <p>{dogElements} elements</p>
                    </ul>
            </section>
        </div>
    )
}


export default Catalog