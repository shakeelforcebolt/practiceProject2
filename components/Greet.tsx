
type GreetProps = {
    name : string
}


const greet = (props : GreetProps) => {
    return (
        <div>
            <h1>Greet Heading!!!!!</h1>
            <h1>Greet Heading!!!!!</h1>
            <h1>In Props Name Call: {props.name}</h1>

        </div>
    )
}

export default greet;