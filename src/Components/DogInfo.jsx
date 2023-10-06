import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import noImage from "../assets/noImage.png"

const URL = 'https://api.jsonbin.io/v3/b/65112e6654105e766fb95cc8';

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

        const dogIsPresent = dog.present ? 'green-shadow' : 'red-shadow';

        if (dogIsPresent) {
            console.log("the dog is:", dogIsPresent);
        } else {
            console.log("the dog is:", dogIsPresent);
        }

            const boxStyle = {
              boxShadow: dog.present ? '0 0 40px green' : '0 0 40px red',
            };

    return (
        <section className="dog-info-page">
            {dog && dog.owner && (
            <div className="dog-container">
                    <div className="dog-info-image">
                    <img key={ dog } src={ dog.img } style={boxStyle}
                    onError={(e) => (e.currentTarget.src = noImage)} className="dog-info-image"></img>
                    </div>
                <div className="info-container">
                    <div className="dog-info-placeholder">
                        <p>NAME: </p> 
                        <p>AGE:</p>
                        <p>BREED:</p>
                        <p>SEX:</p>
                        <p>CHIPNUMBER:</p>
                        <p>OWNER:</p>
                        <p>PHONE NUMBER:</p>
                        <p>PRESENT:</p>
                    </div>

                    <div className="dog-info-data">
                        <p>{dog.name}</p>
                        <p>{dog.age}</p>
                        <p>{dog.breed}</p>
                        <p>{dog.sex}</p>
                        <p>{dog.chipNumber}</p>
                        <p>{dog.owner.name} {dog.owner.lastName}</p>
                        <p>{dog.owner.phoneNumber}</p>
                        <p>{dog.present ? 'Yes' : 'No' }</p>
                    </div>
                </div>
            </div>
            )}
        </section>
    )
}

export default DogInfo