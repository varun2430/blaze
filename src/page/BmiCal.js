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
    const [suggestion, setSuggestion] = useState("");

    const sugArray = [
        "Skipping breakfast will not help you lose weight. You could miss out on essential nutrients and you may end up snacking more throughout the day because you feel hungry.",
        "Eating at regular times during the day helps burn calories at a faster rate. It also reduces the temptation to snack on foods high in fat and sugar.",
        "Fruit and veg are low in calories and fat, and high in fibre – 3 essential ingredients for successful weight loss. They also contain plenty of vitamins and minerals.",
        "Being active is key to losing weight and keeping it off. As well as providing lots of health benefits, exercise can help burn off the excess calories you cannot lose through diet alone.",
        "People sometimes confuse thirst with hunger. You can end up consuming extra calories when a glass of water is really what you need.",
        "Foods containing lots of fibre can help keep you feeling full, which is perfect for losing weight. Fibre is only found in food from plants, such as fruit and veg, oats, wholegrain bread, brown rice and pasta, and beans, peas and lentils.",
        "Knowing how to read food labels can help you choose healthier options. Use the calorie information to work out how a particular food fits into your daily calorie allowance on the weight loss plan.",
        "Using smaller plates can help you eat smaller portions. By using smaller plates and bowls, you may be able to gradually get used to eating smaller portions without going hungry. It takes about 20 minutes for the stomach to tell the brain it's full, so eat slowly and stop eating before you feel full.",
        "Do not ban any foods from your weight loss plan, especially the ones you like. Banning foods will only make you crave them more. There's no reason you cannot enjoy the occasional treat as long as you stay within your daily calorie allowance.",
        "To avoid temptation, do not stock junk food – such as chocolate, biscuits, crisps and sweet fizzy drinks – at home. Instead, opt for healthy snacks, such as fruit, unsalted rice cakes, oat cakes, unsalted or unsweetened popcorn, and fruit juice.",
        "A standard glass of wine can contain as many calories as a piece of chocolate. Over time, drinking too much can easily contribute to weight gain.",
        "Try to plan your breakfast, lunch, dinner and snacks for the week, making sure you stick to your calorie allowance. You may find it helpful to make a weekly shopping list."
    ];

    const noSuggestion = sugArray.length;

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

        setCondition(temp_condition);

        const rng = Math.floor( ( Math.random() * (noSuggestion) ) + 0 );

        console.log(rng, noSuggestion);

        setSuggestion(sugArray[rng]);

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
