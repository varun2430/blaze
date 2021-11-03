import { useState } from "react"
import Jumbotron from "../component/Jumbotron";
import Suggestion from "../component/Suggestion";

const BmiCal = () => {

    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [condition, setCondition] = useState("");

    const calculateBmi = (e) => {

        e.preventDefault();

        let temp = ( ( weight/( height * height ) )*10000 ).toFixed(1);

        setBmi(temp);

        calculateCondition(parseFloat(temp));
    }

    const calculateCondition = (fbmi) => {

        if (gender === "male" || gender === "female") {

            switch(true) {
                
                case (fbmi < 16):
                    setCondition("Severe Thinness");
                    break;

                case (fbmi >= 16 && fbmi <= 17):
                    setCondition("Moderate Thinness");
                    break;

                case (fbmi >= 17 && fbmi <= 18.5):
                    setCondition("Mild Thinness");
                    break;
                
                case (fbmi >= 18.5 && fbmi <= 25):
                    setCondition("Normal");
                    break;

                case (fbmi >= 25 && fbmi <= 30):
                    setCondition("Overweight");
                    break;

                case (fbmi >= 30 && fbmi <= 35):
                    setCondition("Obese Class I");
                    break;

                case (fbmi >= 35 && fbmi <= 40):
                    setCondition("Obese Class II");
                    break;

                default :
                    setCondition("Obese Class III");
                    break;

            }
            
        }
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

            <Jumbotron title="Bmi Calculator" text="Body mass index (BMI) is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m2, resulting from mass in kilograms and height in metres." />

            <div className="row m-1">

                <div className="col-md">

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
                                    <input style={{margin:"15px"}} type="radio" value="male" name="gender" onChange={(e) => setGender(e.target.value)} required />
                                    <label for="male">Male</label>

                                    <input style={{margin:"15px"}} type="radio" value="female" name="gender" onChange={(e) => setGender(e.target.value)} required />
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

                <div className="col-md">

                    <div className="container-fluid h-100 border">

                        <div className="row">

                            <div className="col mx-3 pt-3">
                                <h4 style={{textAlign:"center"}}>Result = {bmi} Kg/m<sup>2</sup></h4>
                                <h4 style={{textAlign:"center"}}>Condition = {condition}</h4>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Suggestion text="" />

        </>

    )
}

export default BmiCal
