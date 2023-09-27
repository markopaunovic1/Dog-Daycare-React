import { useState ,useEffect } from "react"
import { json } from "react-router-dom";

const URL = 'https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683';

const Catalog = (props) => {

    const [dog, setDog] = useState(0)

    useEffect(() => {
        fetch(URL)
        .then ((response) => response.json())
        .then ((data) => console.log(data.record));
            
    }, []);

    return (
        <section>
            <h1>Catalog page</h1>
{/*             <p>current item: {setItem(json.current.name)}</p>
 */}    </section>
    )
}


export default Catalog