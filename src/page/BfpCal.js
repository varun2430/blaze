import { useState } from 'react';
import Jumbotron from '../component/Jumbotron';
import Suggestion from '../component/Suggestion';
import sug from './../Suggestion.json';

const BfpCal = () => {

    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [neck, setNeck] = useState("");
    const [waist, setWaist] = useState("");
    const [hip, setHip] = useState("");
    const [bfp, setBfp] = useState("");
    const [condition, setCondition] = useState("");
    const [suggestion, setSuggestion] = useState("");

    const calculateBfp = (e) => {

        e.preventDefault();

        let temp_bfp;

        if(gender === "male")
        {
            temp_bfp = parseFloat( ( ( 495 / ( 1.0324 - 0.19077*(Math.log10(parseFloat(waist)-parseFloat(neck))) + 0.15456*(Math.log10(height)) ) ) - 450 ).toFixed(1) );
        }
        else
        {
            temp_bfp = parseFloat( ( ( 495 / ( 1.29579 - 0.35004*(Math.log10(parseFloat(waist)+parseFloat(hip)-parseFloat(neck))) + 0.22100*(Math.log10(height)) ) ) - 450 ).toFixed(1) );
        }

        setBfp(temp_bfp);

        const noGeneralSug = sug.general.length;

        const rng = Math.floor( ( Math.random() * (noGeneralSug) ) + 0 );

        setSuggestion(sug.general[rng].str);

    }

    const clearInput = (e) => {

        setAge("");
        setGender("");
        setHeight("");
        setWeight("");
        setNeck("");
        setWaist("");
        setHip("");
        setBfp("");
        setCondition("");
        setSuggestion("");

    }

    return (
        <>

            <Jumbotron title="Body Fat Percentage Calculator" text="The body fat percentage of a human or other living being is the total mass of fat divided by total body mass, multiplied by 100; body fat includes essential body fat and storage body fat." />
            
            <div className="row m-1">

                <div className="col-md">

                    <div className="container-fluid h-100 border border-2 rounded">
                        
                        <form onSubmit={calculateBfp}>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" htmlFor="age">Age</label>
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
                                    <input className="form-control" type="text" id="height" value={height} onChange={(e) => setHeight(e.target.value)} required />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" htmlFor="weight">Weight</label>
                                </div>

                                <div className="col m-2">
                                    <input className="form-control" type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" htmlFor="neck">Neck</label>
                                </div>

                                <div className="col m-2">
                                    <input className="form-control" type="text" id="neck" value={neck} onChange={(e) => setNeck(e.target.value)} required />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" htmlFor="waist">Waist</label>
                                </div>

                                <div className="col m-2">
                                    <input className="form-control" type="text" id="waist" value={waist} onChange={(e) => setWaist(e.target.value)} required />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col mx-2 pt-3">
                                    <label className="form-label" htmlFor="hip">Hip</label>
                                </div>

                                <div className="col m-2">
                                    <input className="form-control" type="text" id="hip" value={hip} onChange={(e) => setHip(e.target.value)} required />
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
                                <h4 style={{textAlign:"center"}}>Result = {bfp} %</h4>
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

export default BfpCal
