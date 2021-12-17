import { useState } from "react"
import Jumbotron from "../component/Jumbotron";
import Suggestion from "../component/Suggestion";
import sug from "../Suggestion.json";

const BmiCal = () => {

    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [condition, setCondition] = useState("");
    const [suggestion, setSuggestion] = useState("");

    const calculateBmi = (e) => {

        e.preventDefault();

        let temp_bmi = parseFloat( ( ( weight/( height * height ) )*10000 ).toFixed(1) );
        let temp_condition = "";

        setBmi(temp_bmi);

        switch(true) {
                
             case (temp_bmi < 16):
                temp_condition = "Severe Thinness";
                break;

            case (temp_bmi >= 16 && temp_bmi <= 17):
                temp_condition = "Moderate Thinness";
                break;

            case (temp_bmi >= 17 && temp_bmi <= 18.5):
                temp_condition = "Mild Thinness";
                break;
                
            case (temp_bmi >= 18.5 && temp_bmi <= 25):
                temp_condition = "Normal";
                break;

            case (temp_bmi >= 25 && temp_bmi <= 30):
                temp_condition = "Overweight";
                break;

            case (temp_bmi >= 30 && temp_bmi <= 35):
                temp_condition = "Obese Class I";
                break;

            case (temp_bmi >= 35 && temp_bmi <= 40):
                temp_condition = "Obese Class II";
                break;

            default :
                temp_condition = "Obese Class III";
                break;

        }

        const noGeneralSug = sug.general.length;

        setCondition(temp_condition);

        const rng = Math.floor( ( Math.random() * (noGeneralSug) ) + 0 );

        setSuggestion(sug.general[rng].str);

    }

    const clearInput = (e) => {

        setAge("");
        setGender("");
        setHeight("");
        setWeight("");
        setBmi("");
        setCondition("");
        setSuggestion("");

    }

    return (

        <>

            <Jumbotron title="Bmi Calculator" text="Body mass index (BMI) is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m2, resulting from mass in kilograms and height in metres." />

            <div className="row m-1">

                <div className="col-md">

                    <div className="container-fluid h-100 border border-2 rounded">
                        
                        <form onSubmit={calculateBmi}>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" htmlFor="age">Age</label>
                                </div>

                                <div className="col m-2">
                                    <input className="form-control" type="text" id="age" placeholder="Enter Age (18 - 120)" value={age} onChange={(e) => setAge(e.target.value)} required />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label">Gender</label>
                                </div>

                                <div className="col m-2 pt-2">
                                    <input style={{margin:"7px"}} type="radio" value="male" name="gender" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} required />
                                    <label htmlFor="male">Male</label>

                                    <input style={{margin:"7px"}} type="radio" value="female" name="gender" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} required />
                                    <label htmlFor="female">Female</label>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" htmlFor="height">Height</label>
                                </div>

                                <div className="col m-2">
                                    <input className="form-control" type="text" id="height" placeholder="Enter Height in cm" value={height} onChange={(e) => setHeight(e.target.value)} required />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" htmlFor="weight">Weight</label>
                                </div>

                                <div className="col m-2">
                                    <input className="form-control" type="text" id="weight" placeholder="Enter Weight in Kg" value={weight} onChange={(e) => setWeight(e.target.value)} required />
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

                    <div className="container-fluid h-100 border border-2 rounded">

                        <div className="row">

                            <div className="col mx-3 pt-3">
                                <br />
                                <br />
                                <h4 style={{textAlign:"center"}}>Result = {bmi} Kg/m<sup>2</sup></h4>
                                <br />
                                <h4 style={{textAlign:"center"}}>Condition = {condition}</h4>
                                <br />
                                <br />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Suggestion text={suggestion} />

        </>

    )
}


export default BmiCal
