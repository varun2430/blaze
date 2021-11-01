import React from 'react'

const bmi_cal = () => {
    return (
      
    <>
        
      <div class="mt-2 p-5">
          <h1>BMI CALCULATOR</h1>
      </div>
    
      <div className="row">
      
        <div className="col m-3">
      
          <div className="container border border-3 rounded">
      
            <div className="row m-2 p-1">
      
              <div className="col-sm-4">
                <label className="form-label">Age</label>
              </div>
      
              <div className="col-sm-8">
                <input className="form-control" id="age-text"></input>
              </div>
      
            </div>
      
            <div className="row m-2 p-1">
      
              <div className="col-sm-4">
                <label className="form-label">Gender</label>
              </div> 
      
              <div className="col-sm-8">
      
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                  <label class="form-check-label" for="inlineRadio1">Male</label>
                </div>
      
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                  <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
      
              </div>
      
             </div>
      
              <div className="row m-2 p-1">
      
                <div className="col-sm-4">
                  <label className="form-label">Height</label>
                </div>
      
                <div className="col-sm-8">
                  <input className="form-control" id="height-text"></input>
                </div>
      
              </div>
      
              <div className="row m-2 p-1">
      
                <div className="col-sm-4">
                  <label className="form-label">Weight</label>
                </div>
      
                <div className="col-sm-8">
                  <input className="form-control" id="weight-text"></input>
                </div>
      
              </div>
      
              <div className="row m-2 p-1">
      
                <div className="col-sm-3"></div>
                <div className="col-sm-3">
                  <button type="button" class="btn btn-success">Calculate</button>
                </div>
                <div className="col-sm-3"></div>
                <div className="col">
                  <button type="button" class="btn btn-secondary">Clear</button>
                </div>
      
              </div>
      
            </div>
      
          </div>
      
          <div className="col m-3">
      
            <div className="h-100 container border border-3 rounded">
      
            </div>
      
          </div>
      
      </div>

    </>
  )
}

export default bmi_cal
