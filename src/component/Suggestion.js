import React from 'react'

const Suggestion = (props) => {
    return (
        <>

            <div className="row m-3 p-3 border">
                <h3>Suggestion:</h3>
                <p style={{margin:"10px"}}>{props.text}</p>
            </div>
            
        </>
    )
}

export default Suggestion
