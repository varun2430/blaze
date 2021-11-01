import { Link } from "react-router-dom"

const home = () => {
    return (
        <>

            {/* <Link to="/bmi_calculator">bmi calculator</Link> */}

            <div class="accordion" id="accordion_home">

              <div class="accordion-item">

                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h5>Body Mass Index</h5>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion_home">
                  <div class="accordion-body">
                    <strong>Body mass index (BMI)</strong> is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m2, resulting from mass in kilograms and height in metres.
                    <br />
                    The BMI may be determined using a table or chart which displays BMI as a function of mass and height using contour lines or colours for different BMI categories, and which may use other units of measurement (converted to metric units for the calculation).
                    <br />
                    The BMI is a convenient rule of thumb used to broadly categorize a person as underweight, normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone) and height. Major adult BMI classifications are underweight (under 18.5 kg/m2), normal weight (18.5 to 24.9), overweight (25 to 29.9), and obese (30 or more). When used to predict an individual's health, rather than as a statistical measurement for groups, the BMI has limitations that can make it less useful than some of the alternatives, especially when applied to individuals with abdominal obesity, short stature, or unusually high muscle mass.
                    <br />
                    BMIs under 20 and over 25 have been associated with higher all-causes mortality, with the risk increasing with distance from the 20–25 range. However, the ideal range varies by race, with a BMI that is considered normal for a group of Europeans being unhealthily high for a group of Asians.
                    <br />
                    <b><Link to="/bmi_calculator">GO TO BMI CALCULATOR</Link></b>
                  </div>

                </div>

              </div>



              <div class="accordion-item">

                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h5>Basal Metabolic Rate</h5>
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion_home">
                  <div class="accordion-body">
                    <strong>Basal metabolic rate (BMR)</strong> is the rate of energy expenditure per unit time by endothermic animals at rest. It is reported in energy units per unit time ranging from watt (joule/second) to ml O2/min or joule per hour per kg body mass J/(h·kg). Proper measurement requires a strict set of criteria be met. These criteria include being in a physically and psychologically undisturbed state, in a thermally neutral environment, while in the post-absorptive state (i.e., not actively digesting food). In bradymetabolic animals, such as fish and reptiles, the equivalent term standard metabolic rate (SMR) is used. It follows the same criteria as BMR, but requires the documentation of the temperature at which the metabolic rate was measured. This makes BMR a variant of standard metabolic rate measurement that excludes the temperature data, a practice that has led to problems in defining "standard" rates of metabolism for many mammals.
                    <br />
                    Metabolism comprises the processes that the body needs to function. Basal metabolic rate is the amount of energy per unit of time that a person needs to keep the body functioning at rest. Some of those processes are breathing, blood circulation, controlling body temperature, cell growth, brain and nerve function, and contraction of muscles. Basal metabolic rate affects the rate that a person burns calories and ultimately whether that individual maintains, gains, or loses weight. The basal metabolic rate accounts for about 60 to 75% of the daily calorie expenditure by individuals. It is influenced by several factors. In humans, BMR typically declines by 1–2% per decade after age 20, mostly due to loss of fat-free mass, although the variability between individuals is high.


                  </div>

                </div>

              </div>

            </div>

        </>
    )
}

export default home
