
const Jumbotron = (props) => {
    return (
        <>

            <div className="row mx-3 my-4">
                <h3>{props.title}</h3>
                <p style={{marginLeft:"10px", marginRight:"10px"}}>{props.text}</p>
            </div>
            
        </>
    )
}

export default Jumbotron
