import { Link } from "react-router-dom"

const Welcome = (props) => {
    return (
        <section className="welcome-page">
            <div className="text-and-button">
                <div className="text-for-h1-h2">
                    <h1>Welcome to Doggy Daycare!</h1>
                    <h2>Please press the Catalog button to see all registered dogs.</h2>
                </div>
                    <Link to={"/Catalog"}>
                    <button className="catalog-button">CATALOG</button>
                    </Link>
            </div>
            <div className="dogs">
                {/* <img src="https://pics.clipartpng.com/midle/Dog_PNG_Clip_Art-1430.png" alt="dog" width={300} height={200}/> */}
                <img src="https://purepng.com/public/uploads/large/purepng.com-dog-lookinganimalsdog-981524671625rfjb4.png" alt="dog" width={800} height={700} className="big-dog"/>
            </div>
        </section>
    )
}

export default Welcome