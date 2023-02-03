
import TechStack from "./TechStack";

function Profile(props) {
    
    return (
        <>
            <div style ={{
                backgroundColor: "grey",
            }}>
                <img src={props.image} alt="profile_image"></img><br/>
            </div>
            <div style = {{
                backgroundColor: "lightblue"
            }}>
                <p style ={{
                    textAlign: "center",
                }}>
                My name is {props.name} and I am a {props.job} and I formerly work as {props.past_job}.<br/>

                At the moment I am currently studying these following tech stacks at KodeGo Bootcamp.<br/>
            <TechStack></TechStack>
                </p>
            </div>
        </>
    )
}

export default Profile;