import { useState } from "react";
import Jumbotron from "../component/Jumbotron";
import Suggestion from "../component/Suggestion";
import sug from "../Suggestion.json";

const BmrCal = () => {

    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmr, setBmr] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const clearInput = (e) => {

        setAge("");
        setGender("");
        setHeight("");
        setWeight("");
        setBmr("");
        setSuggestion("");

    }

    const CalculateBmr = (e) => {

        e.preventDefault();

        let temp_bmr;

        if(gender === "male")
        {
            temp_bmr = parseFloat( (10*weight + 6.25*height - 5*age + 5).toFixed(1) );
        }
        else
        {
            temp_bmr = parseFloat( (10*weight + 6.25*height - 5*age - 161).toFixed(1) );
        }

        setBmr(temp_bmr);

        const noGeneralSug = sug.general.length;

        const rng = Math.floor( ( Math.random() * (noGeneralSug) ) + 0 );

        setSuggestion(sug.general[rng].str);

    }

    return (

        <>
            
            <Jumbotron title="Bmr Calculator" text="Basal metabolic rate (BMR) is the rate of energy expenditure per unit time by endothermic animals at rest. It is reported in energy units per unit time ranging from watt (joule/second) to ml O2/min or joule per hour per kg body mass J/(h·kg)." />

            <div className="row m-1">

                <div className="col-md">

                    <div className="container-fluid h-100 border border-2 rounded">
                        
                        <form onSubmit={CalculateBmr}>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" htmlFor="age">Age</label>
                                </div>

                                <div className="col m-2">
                                    <input className="form-control" type="text" id="age" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} required />
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
                                <br />
                                <br />
                                <h4 style={{textAlign:"center"}}>Result = {bmr} Calories/day</h4>
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

export default BmrCal
