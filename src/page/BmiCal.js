import { useState } from "react"

const BmiCal = () => {

    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");

    const calculateBmi = (e) => {

        e.preventDefault();

        setBmi( ( ( weight/( height * height ) )*10000 ).toFixed(1) );
    }

    const clearInput = (e) => {

        setAge("");
        setGender("");
        setHeight("");
        setWeight("");
        setBmi("");
    }

    return (

        <>

            <div className="container-fluid my-3 mx-2">
                <h3>Bmi Calculator</h3>
            </div>

            <div className="row m-1">

                <div className="col">

                    <div className="container-fluid h-100 border">
                        
                        <form onSubmit={calculateBmi}>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" for="age">Age</label>
                                </div>

                                <div className="col m-2">
                                    <input className="form-control" type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label">Gender</label>
                                </div>

                                <div className="col m-2 pt-2">
                                    <input type="radio" id="male" name="gender" onChange={(e) => setGender(e.target.id)} required />
                                    <label for="male">Male</label>

                                    <input type="radio" id="female" name="gender" onChange={(e) => setGender(e.target.id)} required />
                                    <label for="female">Female</label>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" for="height">Height</label>
                                </div>

                                <div className="col m-2">
                                    <input className="form-control" type="text" id="height" value={height} onChange={(e) => setHeight(e.target.value)} required />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" for="weight">Weight</label>
                                </div>

                                <div className="col m-2">
                                    <input className="form-control" type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col mx-2 p-3">
                                    <input className="btn btn-success" type="submit" value="Calculate" />
                                </div>

                                <div className="col m-2 p-2">
                                    <input className="btn btn-secondary" type="button" value="Clear" onClick={clearInput} />
                                </div>

                            </div>

                        </form>

                    </div>

                </div>

                <div className="col">

                    <div className="container-fluid h-100 border">

                        <div className="row">

                            <div className="col mx-3 pt-3">
                                <h4 style={{textAlign:"center"}}>Result = {bmi} Kg/m<sup>2</sup></h4>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )
}

export default BmiCal
