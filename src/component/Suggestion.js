import React from 'react'

const Suggestion = (props) => {
    return (
        <>

            <div className="row m-3 p-3 border border-2 rounded">
                <h3>Suggestion:</h3>
                <h5 style={{margin:"10px"}}>{props.text}</h5>
            </div>
            
        </>
    )
}

export default Suggestion
