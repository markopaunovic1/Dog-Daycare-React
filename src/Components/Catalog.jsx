import { useState ,useEffect, createElement } from "react"
import { Link, json, useNavigate, useParams } from "react-router-dom";
import noImage from "../assets/noImage.png"

const URL = 'https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683';

const Catalog = (props) => {

    const [dogs, setDog] = useState([]);
    const [dogElements, setdogElements] = useState([]);
    const [selectedDog, setSelectedDog] = useState(0);

    useEffect(() => {
        fetch(URL)
        .then ((response) => response.json())
        .then ((data) => {
                setDog(data.record);
                console.log(data);
        });

    }, []);

    useEffect((props) => {
        const length = Array.length;

        const elements = dogs.map((dogsData) => (

        <Link to={`/DogInfo/ ${ dogsData }`}>
        <li key={dogsData} className="dogItem">
            { dogsData.name + ' ' }
            { dogsData.breed } 
            <img key={ dogsData } src={ dogsData.img } 
            onError={(e) => (e.currentTarget.src = noImage)} className="all-dogs-image"></img>
        </li>
        </Link> ));
            
        setdogElements(elements);
    }, [dogs]);
    
    const passDogData = () => {
        const dog = {dog};

        return(
            <Link to={`/dogInfo/${data.name}/ ${data.age}`}> </Link>
        )
    }

    return (
        <div>
            <section className="catalog">
                    <ul className="list-of-dogs">
                    <h1 className="Catalog-title">Registered Dogs:</h1>
                        <p>{dogElements} elements</p>
                        {/* {dogs.map((image, index) => 
                        <img key={index} src={image.img} alt={'Image ${index'} className="dogItem"></img>)} */}
                    </ul>
    {/* <p>current item: {setItem(json.current.name)}</p */}
            </section>
        </div>
    )
}


export default Catalog