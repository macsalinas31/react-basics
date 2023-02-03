import Location from "./Location";


function Helloworld(props) {
    return (
       <>
        <h1>Hello World</h1>
        <Location name={props.name} city={props.city}></Location>
       </>
    )
}
export default Helloworld;

