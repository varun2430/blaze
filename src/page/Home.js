import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>

            <div className="container-fluid py-4 px-4">

                <div class="accordion" id="accordionhome">

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <b>Body Mass Index</b>
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionhome">
                      <div class="accordion-body">
                            <strong>Body mass index (BMI)</strong> is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m2, resulting from mass in kilograms and height in metres.
                            <br />
                            The BMI is a convenient rule of thumb used to broadly categorize a person as underweight, normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone) and height. Major adult BMI classifications are underweight (under 18.5 kg/m2), normal weight (18.5 to 24.9), overweight (25 to 29.9), and obese (30 or more). When used to predict an individual's health, rather than as a statistical measurement for groups, the BMI has limitations that can make it less useful than some of the alternatives, especially when applied to individuals with abdominal obesity, short stature, or unusually high muscle mass.
                            <br />
                            <br />
                            <h6 style={{textAlign:"center"}}>
                                <Link to="/bmi_calculator">
                                   <input className="btn btn-primary" style={{textAlign:"center"}} type="button" value="BMI CALCULATOR" />
                                </Link>
                            </h6>
                      </div>
                    </div>
                  </div>


                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <b>Basal Metabolic Rate</b>
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionhome">
                      <div class="accordion-body">
                        <strong>Basal metabolic rate (BMR)</strong> is the rate of energy expenditure per unit time by endothermic animals at rest. It is reported in energy units per unit time ranging from watt (joule/second) to ml O2/min or joule per hour per kg body mass J/(h·kg). Proper measurement requires a strict set of criteria be met. These criteria include being in a physically and psychologically undisturbed state, in a thermally neutral environment, while in the post-absorptive state (i.e., not actively digesting food). In bradymetabolic animals, such as fish and reptiles, the equivalent term standard metabolic rate (SMR) is used. It follows the same criteria as BMR, but requires the documentation of the temperature at which the metabolic rate was measured. This makes BMR a variant of standard metabolic rate measurement that excludes the temperature data, a practice that has led to problems in defining "standard" rates of metabolism for many mammals.
                        <br />
                        <br />
                        <h6 style={{textAlign:"center"}}>
                            <Link to="/bmr_calculator">
                               <input className="btn btn-primary" style={{textAlign:"center"}} type="button" value="BMR CALCULATOR" />
                            </Link>
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <b>Body Fat Percentage</b>
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionhome">
                      <div class="accordion-body">
                        The <strong>body fat percentage</strong> of a human or other living being is the total mass of fat divided by total body mass, multiplied by 100; body fat includes essential body fat and storage body fat. Essential is necessary to maintain life and reproductive functions. The percentage of essential body fat for women is greater than that for men, due to the demands of childbearing and other hormonal functions. Storage body fat consists of fat accumulation in adipose tissue, part of which protects internal organs in the chest and abdomen. The body fat percentage is a measure of fitness level, since it is the only body measurement which directly calculates a person's relative body composition without regard to height or weight.
                        <br />
                        <br />
                        <h6 style={{textAlign:"center"}}>
                            <Link to="/bfp_calculator">
                               <input className="btn btn-primary" style={{textAlign:"center"}} type="button" value="BODY FAT CALCULATOR" />
                            </Link>
                        </h6>
                      </div>
                    </div>
                  </div>

                </div>

            </div>

        </>
    )
}

export default Home
