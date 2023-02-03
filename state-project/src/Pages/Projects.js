import {useParams} from "react-router-dom"

function ViewProject (){
    const {id} = useParams ()
    return (
        <>
            This are my products wtih an ID number of {id}
        </>
    )
}

export default ViewProject;