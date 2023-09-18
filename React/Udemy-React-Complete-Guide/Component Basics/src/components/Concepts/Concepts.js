import Concept from "../Concept/Concept";

function Concepts(props){
    return (
        <ul id="concepts">
            {props.concepts.map(concept => 
                <Concept concept={concept}/>)}
        </ul>
    )
}

export default Concepts;