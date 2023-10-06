import { useState ,useEffect, createElement } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import noImage from "../assets/noImage.png"

const URL = 'https://api.jsonbin.io/v3/b/65112e6654105e766fb95cc8';

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

        const elements = dogs.map((dogsData) => (
        <Link className="dog-link-item" to={`/DogInfo/${ dogsData.chipNumber }`}>
            <li key={dogsData} className="dogItem">
                { dogsData.name + ' ' }
                { dogsData.chipNumber} 
                <img key={ dogsData } src={ dogsData.img } style={{
                        boxShadow: dogsData.present ? '0 0 20px green' : '0 0 20px red',
                    }}
                onError={(e) => (e.currentTarget.src = noImage)} className="all-dogs-image"></img>
            </li>
        </Link> ));

        setdogElements(elements);
    }, [dogs]);

    const eachDog = dogs.present;
    console.log("each dog:", eachDog);

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