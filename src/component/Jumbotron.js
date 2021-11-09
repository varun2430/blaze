
const Jumbotron = (props) => {
    return (
        <>

            <div className="row mx-3 my-4">
                <h3>{props.title}</h3>
                <h6 style={{marginLeft:"10px", marginRight:"10px"}}>{props.text}</h6>
            </div>
            
        </>
    )
}

export default Jumbotron
