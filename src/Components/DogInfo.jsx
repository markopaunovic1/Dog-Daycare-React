import { useState } from "react"
import { useParams } from "react-router-dom"

const DogInfo = () => {
    const { id } = useParams();
    console.log(id + "= this is id ");

    return (
        <section className="dog-info-page">
            <div className="dog-container">
                <div className="dog-info-image">
                    <h1>dog Info - {id}</h1>
                </div>
                <p>Image of dog</p>
                <p>name: name</p>
                <p>age: age</p>
                <p>breed: breed</p>
                <p>sex: sex</p>
                <p>chipnumber: chipnumber</p>
                <p>owner: owner</p>
                <p>phone number: phone number</p>
                <p>present: present</p>
            </div>
        </section>
    )
}

export default DogInfo