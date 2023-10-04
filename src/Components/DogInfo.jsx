import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import noImage from "../assets/noImage.png"

const URL = 'https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683';

const DogInfo = () => {
    const params = useParams();
    const currentDog = params.id;

    const [dog, setDog] = useState([]);

    useEffect(() => {
        fetch(URL)
        .then ((response) => response.json())
        .then ((data) => { 

            const specificDog = data.record.find((dog) => dog.chipNumber === currentDog);
            console.log("current dog: ",specificDog);

            if (specificDog) {
                setDog(specificDog);
              } else {
                // Handle if dog not found
                console.log('Dog not found');
              }
            })
            .catch((error) => {
              console.error('Error fetching dog data:', error);
            });
        }, []);

    return (
        <section className="dog-info-page">
            {dog && dog.owner && (
            <div className="dog-container">
                    <div className="dog-info-image">
                        <h1>dog Info</h1>
                    </div>
                    
                    <img key={ dog } src={ dog.img } 
                    onError={(e) => (e.currentTarget.src = noImage)} className="all-dogs-image"></img>
                    <p>This is current dog ID: {params.id}  </p>
                <p>name: {dog.name}</p>
                <p>age: age {dog.age}</p>
                <p>breed: {dog.breed}</p>
                <p>sex: {dog.sex}</p>
                <p>chipnumber: {dog.chipNumber}</p>
                <p>owner: {dog.owner.name}</p>
                <p>phone number: {dog.owner.lastName}</p>
                <p>present: {dog.present}</p >
            </div>
            )}
        </section>
    )
}

export default DogInfo