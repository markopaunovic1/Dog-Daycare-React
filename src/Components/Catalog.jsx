import { useState ,useEffect } from "react"
import { json } from "react-router-dom";

const URL = 'https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683';

const Catalog = (props) => {

    const [dog, setDog] = useState("");

    useEffect(() => {
        fetch(URL)
        .then ((response) => response.json())
        .then ((data) => {
                console.log(data.record[0].name);
                setDog(data.record[0].name);

        });
            
    }, []);

    const viewDog = () => {
        {dog.map((item)  => {
            <li key={item.id}>{item.breed}</li>
            })};
    }

    return (
        <div>
            <section>
                <h1>Registered Dogs:</h1>
                    <ul>
                        <p>{dog}</p>
                    </ul>
    {/*             <p>current item: {setItem(json.current.name)}</p>
    */}    </section>
        </div>
    )
}


export default Catalog